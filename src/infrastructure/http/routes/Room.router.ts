import { Router } from "express";
import { roomController } from "../controllers/room.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const roomRouter = Router()

roomRouter.post("/create", authMiddleware, roomController.createRoom)

export { roomRouter }