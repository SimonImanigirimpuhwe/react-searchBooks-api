import { Router } from 'express';
import controller from '../controllers/authentication';
import { registerValidation, loginValidation } from '../middleware/validation';



const authRouter = new Router();

authRouter
    .post('/register', registerValidation, controller.registerController )
    .post('/login',loginValidation, controller.loginController)

export default authRouter;