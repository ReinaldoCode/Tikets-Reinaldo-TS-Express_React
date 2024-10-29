import { Response, Request, NextFunction } from 'express';
import { BadRequestError } from '../error/custom.error';
import { verifyJWT } from '../utils/token';
import { AuthenticatedRequest } from '../models/user';


export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.cookies;
  try {
    if (!token) throw new BadRequestError('invalid');
    const {user_id , role} = verifyJWT(token);
    req.user = { user_id,role}
    next(); 
  } catch (error) {
    next(error);
  }
};
