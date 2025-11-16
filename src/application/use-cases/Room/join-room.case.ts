import { JoinConfigDTO, JoinRoomDTO } from "@/application/dto/room.dto";
import { Player } from "@/domain/entities/Player";
import { GameRepository } from "@/infrastructure/database/Memory/repositories/Game.repository";
import { PlayerRepository } from "@/infrastructure/database/Memory/repositories/Player.repository";
import { RoomRepository } from "@/infrastructure/database/Memory/repositories/Room.repository";
import { UserRepository } from "@/infrastructure/database/Memory/repositories/GuestUser.repository";

export const joinRoom = (dto: JoinRoomDTO) => {

    const roomOrm = new RoomRepository()

    const playerOrm = new PlayerRepository()

    const gameOrm = new GameRepository()

    const userOrm = new UserRepository()

    const room = roomOrm.getByID(dto.roomID)

    let player = playerOrm.getByUserID(dto.userID)

    if (!player) {

        const user = userOrm.getByID(dto.userID)

        player = new Player(user.name, user.id)

        player.id = playerOrm.save(player)

    }

    const identifier = player.id!

    const game = gameOrm.getByRoomId(dto.roomID)

    const players = gameOrm.getAllPlayersByRoomID(dto.roomID)

    const playerRes: Players = []

    let host: number = -1

    for (let index = 0; index < players.length; index++) {
     
        if (room.hostID == players[index].userID)
            host = players[index].id!;
     
        playerRes.push({ id: players[index].id!, name: players[index].name });

    }

    return {
        host: host,
        rules: Array.from(game.rules.entries()),
        players: playerRes,
        identifier: identifier
    } as JoinConfigDTO

}