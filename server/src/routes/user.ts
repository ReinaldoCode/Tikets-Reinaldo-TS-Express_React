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

userRouter.route('/static/update').patch(updateUser);
userRouter.route('/static/delete').delete(deleteUser);

userRouter.route('/current-user').get(getUserById);

export { userRouter };
