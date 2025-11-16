import { Game } from "../entities/Game";
import { Player } from "../entities/Player";

export interface IGameRepository {
    getByID(id: number): Game
    getByRoomId(id: string): Game
    getAllPlayersByRoomID(roomId: string): Player[]
    findAllPlayersOrderByPoints(gameID: number): Player[]
    getByPlayerID(playerID: number): Game
    existByID(id: number): boolean
    save(game: Game): void
}