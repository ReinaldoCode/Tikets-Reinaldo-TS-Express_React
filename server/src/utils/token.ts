import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { User } from '../types/user';

dotenv.config();

const secret: string = process.env.JWT_SECRET || '';

export const createJWT = (payload: JwtPayload) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
  return token;
};

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, secret);
  return decoded as User;
};
