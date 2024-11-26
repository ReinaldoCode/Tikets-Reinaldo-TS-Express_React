import { Response, Request, NextFunction } from 'express';
import {
  CREATE_NEW_USER,
  SELECT_ALL_USERS,
  DELETE_USER_BY_ID,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
  Login,
  GET_USER_BY_ID2,
} from '../db/queries';
import { pool } from '../db';
import {
  findById,
  getNewUserData,
  updateUserData,
  validateID,
  validPassword,
} from '../utils';

import { BadRequestError, NotFoundError } from '../error/custom.error';
import { createJWT } from '../utils/token';
import { User, UserReq } from '../types/user';

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const UserData = req as unknown as UserReq;
    const id = UserData?.user.user_id;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount, rows } = await pool.query<User>(GET_USER_BY_ID, [id]);
    if (!findById(rowCount)) throw new NotFoundError(`No user with ID ${id}`);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { rows } = await pool.query<User>(SELECT_ALL_USERS);
    const { name, email, password } = req.body;
    if (!name || !email || !password) throw new BadRequestError('Invalid data');
    const values = await getNewUserData(name, email, password, rows.length);
    await pool.query<User>(CREATE_NEW_USER, values);
    res.status(201).json({ msg: 'User has been created' });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount, rows } = await pool.query<User>(GET_USER_BY_ID2, [id]);
    if (!findById(rowCount)) throw new NotFoundError(`No user with ID ${id}`);
    const values = await updateUserData(req.body, rows[0], id);

    await pool.query<User>(UPDATE_USER_BY_ID, values);
    res.status(200).json({ msg: 'User updated' });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    if (!validateID(id)) throw new BadRequestError('Wrong ID format');
    const { rowCount } = await pool.query<User>(DELETE_USER_BY_ID, [id]);
    if (!findById(rowCount)) throw new NotFoundError(`No user with ID ${id}`);
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    next(error);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const { rowCount, rows } = await pool.query<User>(Login, [email]);
    if (!findById(rowCount)) throw new NotFoundError(`Wrong user name`);
    const active = rows[0].is_active;
    if (!active) throw new BadRequestError('User is inactive');
    const valid = await validPassword(password, rows[0].password);
    if (!valid) throw new BadRequestError('Wrong Password');
    const user = rows[0];
    const token = createJWT({ user_id: user.user_id, role: user.role });
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
    });
    res.status(200).json({ msg: 'User loggen in' });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(200).json({ msg: 'User loggout' });
};
