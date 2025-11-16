import { Player } from "../entities/Player"

export interface IPlayerRepository {
    getByID(id: number): Player
    getByUserID(id: string): Player
    getAllByIDs(...ids: number[]): Player[]
    existByID(id: number): boolean
    save(game: Player): void
}