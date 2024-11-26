import { Router } from 'express';
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers);

userRouter.route('/static/update/:id').patch(updateUser);
userRouter.route('/static/delete').delete(deleteUser);

userRouter.route('/current-user').get(getUserById);

export { userRouter };
