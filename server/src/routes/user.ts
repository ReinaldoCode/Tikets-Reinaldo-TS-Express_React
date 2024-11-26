import { Router } from 'express';
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  currentUser,
} from '../controllers/user.controler';

const userRouter = Router();

userRouter.route('/').get(getAllUsers);

userRouter.route('/static/update/:id').patch(updateUser);
userRouter.route('/static/delete/:id').delete(deleteUser);

userRouter.route('/current-user').get(currentUser);
userRouter.route('/:id').get(getUserById);

export { userRouter };
