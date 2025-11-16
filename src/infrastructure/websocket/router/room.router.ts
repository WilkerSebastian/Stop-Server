import { RoomDTO, JoinRoomDTO } from "@/application/dto/room.dto"
import { SocketRouter } from "@/infrastructure/websocket/WsServer"
import { roomController } from "@/infrastructure/websocket/controller/room.controller"
import { errorHandlerMiddleware } from "../middlewares/socketErrorHandler.middleware"

export const roomRouter = (socket: SocketRouter) => {

    socket.on("joinRoom", (dto: JoinRoomDTO) => errorHandlerMiddleware(() => { roomController.joinRoom(socket, dto)}, dto.roomID))
    socket.on("gameStart", (dto: RoomDTO) => errorHandlerMiddleware(() => { roomController.gameStart(dto)}, dto.roomID))
    socket.on("gameInit", (dto: RoomDTO) => errorHandlerMiddleware(() => { roomController.gameInit(dto)}, dto.roomID))

}