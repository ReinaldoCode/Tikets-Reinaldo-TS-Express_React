import { Request, Response, NextFunction } from 'express';
import { pool } from '../db';
import {
  CREATE_NEW_ITEM,
  SELECT_ALL_INVENTORY,
  SELECT_ITEM_BY_ID,
  SELECT_ITEM_BY_STATUS,
  SELECT_ITEM_BY_USER_ID,
} from '../db/queries';
import { Inventory } from '../models/inventory';
import { validateID, getItenData, findById } from '../utils';
import { BadRequestError, NotFoundError } from '../Error/custom.error';

export const getAllInventory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { rows } = await pool.query<Inventory>(SELECT_ALL_INVENTORY);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
export const getItemByID = async (
  req: Request,
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
  req: Request,
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
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await pool.query<Inventory>(CREATE_NEW_ITEM, getItenData(req.body));
    res.status(200).json({ msg: 'Item Created' });
  } catch (error) {
    next(error);
  }
};
export const updateItemByID = async () => {};
export const deleteItemByID = async () => {};
