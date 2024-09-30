import { Router } from "express";
import { getAllUsers,createUser, updateUser } from "../controllers/User_Controlers";

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').patch(updateUser);

export default userRouter;