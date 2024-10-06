import { StatusCodes } from 'http-status-codes';


   export class CustomError  {
        name: string;
        message: string;
        statusCode: number;

        constructor(message: string){
            this.name= 'Custom Error';
            this.message = message;
            this.statusCode = 0;
        }
    }

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
