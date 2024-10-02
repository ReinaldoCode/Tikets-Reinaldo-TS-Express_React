import { Response, Request } from 'express';
import { CREATE_NEW_USER, SELECT_ALL_USERS } from '../db/queries';
import { pool } from '../db';
import { getNewUserData } from '../utils/user';
import { User } from '../models/user';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const values = getNewUserData(req.body);

    await pool.query<User>(CREATE_NEW_USER, [values]);

    res.status(201).json({ msg: 'User has been created' });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUser = (req: Request, res: Response) => {};
export const deleteUser = (req: Request, res: Response) => {};
