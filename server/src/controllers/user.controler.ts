import { Response, Request } from 'express';
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

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      return res.status(400).json({ msg: 'Wrong id format' });
    const { rowCount, rows } = await pool.query(GET_USER_BY_ID, [id]);
    if (rowCount === 0) return res.status(404).json({ msg: 'User not found' });
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    const values = getNewUserData(req.body, rows.length);
    if (values) {
      await pool.query<User>(CREATE_NEW_USER, values);
      res.status(201).json({ msg: 'User has been created' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      return res.status(400).json({ msg: 'Wrong id format' });
    const { rowCount, rows } = await pool.query(GET_USER_BY_ID, [id]);
    if (rowCount === 0) return res.status(404).json({ msg: 'User not found' });

    const values = updateUserData(req.body, rows[0], id);
    
    await pool.query<User>(UPDATE_USER_BY_ID, values);
    res.status(200).json({ msg: 'User updated' });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!validateID(id))
      return res.status(400).json({ msg: 'Wrong id format' });
    const { rowCount } = await pool.query<User>(DELETE_USER_BY_ID, [id]);
    if (rowCount === 0) return res.status(404).json({ msg: 'User not found' });
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    res.status(400).json(error);
  }
};
