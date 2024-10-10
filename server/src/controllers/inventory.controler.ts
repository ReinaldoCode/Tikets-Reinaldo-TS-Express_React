import { Request, Response, NextFunction } from 'express';
import { pool } from '../db';
import {
  CREATE_NEW_ITEM,
  SELECT_ALL_INVENTORY,
  SELECT_ITEM_BY_ID,
} from '../db/queries';
import { getItenData } from '../utils/inventory';
import { Inventory } from '../models/inventory';
import { validateID } from '../utils/user';
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
    if(rowCount === 0 )throw new NotFoundError(`No item with id${id}`)
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
