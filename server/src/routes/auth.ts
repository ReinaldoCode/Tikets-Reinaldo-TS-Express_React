import { Router } from 'express';
import { login, logout } from '../controllers/user.controler';

const authRouter = Router();

authRouter.route('/login').post(login);

authRouter.route('/logout').get(logout);

export { authRouter };