import { CreateRoomDTO } from "@/application/dto/room.dto"
import { Room } from "@/domain/aggregates/Room"
import { Game } from "@/domain/entities/Game"
import { Player } from "@/domain/entities/Player"
import { GameRepository } from "@/infrastructure/database/Memory/repositories/Game.repository"
import { PlayerRepository } from "@/infrastructure/database/Memory/repositories/Player.repository"
import { RoomRepository } from "@/infrastructure/database/Memory/repositories/Room.repository"
import { UserRepository } from "@/infrastructure/database/Memory/repositories/GuestUser.repository"

export const createRoom = (roomDTO: CreateRoomDTO) => {

    const roomOrm = new RoomRepository()

    const userOrm = new UserRepository()

    const playerOrm = new PlayerRepository()

    const gameOrm = new GameRepository()

    const user = userOrm.getByID(roomDTO.userID)

    const player = new Player(user.name, roomDTO.userID)

    playerOrm.save(player)

    const room = new Room(roomDTO.userID)

    roomOrm.save(room)

    const game = new Game(player.id!, roomDTO.rules, room.id)

    gameOrm.save(game)

    console.log(roomDTO.userID, room.id)

    return room.id

}