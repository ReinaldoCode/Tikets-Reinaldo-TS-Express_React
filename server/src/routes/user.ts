import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  login,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').patch(updateUser).delete(deleteUser).get(getUserById);

userRouter.route('/login').post(login);

export { userRouter };
