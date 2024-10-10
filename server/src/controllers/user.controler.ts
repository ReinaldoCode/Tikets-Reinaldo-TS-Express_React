import { Response, Request, NextFunction } from 'express';
import {
  CREATE_NEW_USER,
  SELECT_ALL_USERS,
  DELETE_USER_BY_ID,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from '../db/queries';
import { pool } from '../db';
import { getNewUserData, updateUserData, validateID } from '../utils/user';
import { User } from '../models/user';
import { BadRequestError, NotFoundError } from '../Error/custom.error';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    res.status(200).json(rows);
  } catch (error) {
    next(error)
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      throw new BadRequestError('Wrong format id')
    const { rowCount, rows } = await pool.query<User>(GET_USER_BY_ID, [id]);
    if (rowCount === 0) throw new NotFoundError(`No user with Id ${id}`)
    res.status(200).json(rows);
  } catch (error) {
    next (error)
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    const {name,email,password} = req.body
    if (!name || !email || !password)
      throw new BadRequestError('Invalid data')
    const values = await getNewUserData(name, email, password , rows.length);
    await pool.query<User>(CREATE_NEW_USER, values);
    res.status(201).json({ msg: 'User has been created' });
  } catch (error) {
    next (error)
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      throw new BadRequestError('Wrong format id')
    const { rowCount, rows } = await pool.query<User>(GET_USER_BY_ID, [id]);
    if (rowCount === 0) throw new NotFoundError(`No user with Id ${id}`)
    const values = await updateUserData(req.body, rows[0], id);
    await pool.query<User>(UPDATE_USER_BY_ID, values);
    res.status(200).json({ msg: 'User updated' });
  } catch (error) {
    next (error)
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      throw new BadRequestError('Wrong format id')
    const { rowCount } = await pool.query<User>(DELETE_USER_BY_ID, [id]);
    if (rowCount === 0) throw new NotFoundError(`No user with Id ${id}`)
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    next(error)
  }
};
