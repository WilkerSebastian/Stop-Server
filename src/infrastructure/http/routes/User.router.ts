import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { userController } from "../controllers/user.controller";

const userRouter = Router()

userRouter.post("/create/guest", authMiddleware, userController.createGuest)

export { userRouter }