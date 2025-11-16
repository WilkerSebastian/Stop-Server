import { PassTurnDTO } from "@/application/dto/game.dto"
import { RoomDTO } from "@/application/dto/room.dto"
import { GameRepository } from "@/infrastructure/database/Memory/repositories/Game.repository"

export const endTurn = (dto: RoomDTO) => {

    const gameOrm = new GameRepository()

    const game = gameOrm.getByRoomId(dto.roomID)

    game.turn = game.turn + game.orderPlayer;

    gameOrm.save(game)

    return {
        turn: game.turn
    } as PassTurnDTO

}