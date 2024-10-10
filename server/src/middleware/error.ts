import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../Error/custom.error';

export const errorHandlerMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode  = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, try again';
  res.status(statusCode).json({msg});
};
