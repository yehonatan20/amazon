import {Router} from 'express'
import { signup } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post("/signup", signup);

export default userRouter;