import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  login,
  logout,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/static/:id').patch(updateUser).delete(deleteUser).get(getUserById);

userRouter.route('/login').post(login);

userRouter.route('/logout').get(logout)

export { userRouter };
