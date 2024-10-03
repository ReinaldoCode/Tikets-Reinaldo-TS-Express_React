import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').patch(updateUser).delete(deleteUser).get(getUserById);

export { userRouter };
