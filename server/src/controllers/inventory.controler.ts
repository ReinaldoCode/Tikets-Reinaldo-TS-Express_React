import { Request, Response, NextFunction, query } from 'express';
import { pool } from '../db';
import {
  CREATE_NEW_ITEM,
  DELETE_ITEM_BY_ID,
  MONTHLY_ITEMS,
  SELECT_ALL_INVENTORY,
  SELECT_ITEM_BY_ID,
  SELECT_ITEM_BY_USER_ID,
  SELECT_TOTAL,
  UPDATE_ITEM_BY_ID,
} from '../db/queries';
import { Inventory, Month } from '../types/inventory';
import { validateID, getItemData, findById, getUpdateItemData } from '../utils';
import { BadRequestError, NotFoundError } from '../error/custom.error';
import { AuthenticatedRequest, UserReq } from '../types/user';
import { expensesByMonth } from '../utils/stats';

export const getAllInventory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const { limit, offset } = req.query;
    // const parsedLimit = parseInt(limit as string);
    // const parsedOffset = parseInt(offset as string);
    // const { rows } = await pool.query<Inventory>(SELECT_ALL_INVENTORY, [
    //   parsedLimit,
    //   parsedOffset,
    // ]);
    const { rowCount, rows } = await pool.query<Inventory>(SELECT_TOTAL);
    const total = rowCount as number;
    // const page = Math.ceil(total / parsedLimit) || null;
    const respond = {
      total: total,
      // page: page,
      items: rows,
    };

    res.status(200).json(respond);
  } catch (error) {
    next(error);
  }
};
export const getItemByID = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount, rows } = await pool.query<Inventory>(SELECT_ITEM_BY_ID, [
      id,
    ]);
    if (!findById(rowCount)) throw new NotFoundError(`No item with id ${id}`);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
export const getItemByUserID = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount, rows } = await pool.query<Inventory>(
      SELECT_ITEM_BY_USER_ID,
      [id],
    );
    if (!findById(rowCount))
      throw new NotFoundError(`No item with user id ${id}`);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const createNewItem = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const UserData = req as unknown as UserReq;
    const user_id = UserData?.user.user_id;
    await pool.query<Inventory>(
      CREATE_NEW_ITEM,
      getItemData(req.body, user_id),
    );

    res.status(201).json({ msg: 'Item Created' });
  } catch (error) {
    next(error);
  }
};
export const updateItemByID = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    if (!validateID(id)) {
      throw new BadRequestError('Wrong ID format');
    }

    const { rowCount, rows } = await pool.query<Inventory>(SELECT_ITEM_BY_ID, [
      id,
    ]);

    if (!findById(rowCount)) {
      throw new NotFoundError(`No item with user id ${id}`);
    }

    const values = getUpdateItemData(req.body, rows[0], id);

    await pool.query<Inventory>(UPDATE_ITEM_BY_ID, values);

    res.status(200).json({ msg: 'Item has been updated' });
  } catch (error) {
    next(error);
  }
};

export const deleteItemByID = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount } = await pool.query<Inventory>(DELETE_ITEM_BY_ID, [id]);
    if (!findById(rowCount))
      throw new NotFoundError(`No item with user id ${id}`);
    res.status(200).json({ msg: 'Item Deleted' });
  } catch (error) {
    next(error);
  }
};

export const getStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allYear = expensesByMonth();
    const year = allYear.year;
    const months = allYear.month;

    const enrichedMonths = await Promise.all(
      months.map(async (month: Month) => {
        const { rows, rowCount } = await pool.query(MONTHLY_ITEMS, [
          month.monthNumber,
          year,
        ]);

        const price: number = rows.reduce((sum, row) => {
          const price = parseFloat(row.price) || 0;
          return Math.round((sum + price) * 100) / 100;
        }, 0);
        const itemsAmaunt = rowCount;
        return { ...month, price, itemsAmaunt };
      }),
    );

    const responseData = {
      year,
      months: enrichedMonths,
    };

    res.status(200).json(responseData);
  } catch (error: any) {
    console.error('Error in getStats:', error);
    res.status(500).json({ msg: 'Something went wrong', error: error.message });
  }
};
