import { CreateRoomDTO } from "@/application/dto/room.dto"
import { createRoom } from "@/application/use-cases/Room/create-room.case"
import { Request, Response } from "express"

export const roomController = {

    createRoom: (req: Request, res: Response) => {

        const dto = req.body as CreateRoomDTO

        const roomID = createRoom(dto)

        res.status(200).json({
            roomID: roomID
        })

    }

}