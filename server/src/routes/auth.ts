import { Router } from 'express';
import { createUser, login, logout } from '../controllers/user.controler';

const authRouter = Router();

authRouter.route('/login').post(login);
authRouter.route('/register').post(createUser);

authRouter.route('/logout').get(logout);

export { authRouter };
