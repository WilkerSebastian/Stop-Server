import { RoomRepository } from "@/infrastructure/database/Memory/repositories/Room.repository"

export const listRoom = () => {

    const roomOrm = new RoomRepository()

    return roomOrm.findAllPublic().map(r => { 
        return {
            id: r.id, 
            size: r.playersId.length 
        }
    })

}