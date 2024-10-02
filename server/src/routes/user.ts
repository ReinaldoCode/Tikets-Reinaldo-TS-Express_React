import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').patch(updateUser);

export { userRouter };
