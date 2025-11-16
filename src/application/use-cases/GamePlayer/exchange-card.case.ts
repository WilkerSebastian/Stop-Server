import { PlayerIndexCardDTO, PlayerIndexCardResDTO } from "@/application/dto/game.dto";
import { Card } from "@/domain/entities/Card";
import { GameRepository } from "@/infrastructure/database/Memory/repositories/Game.repository";
import { PlayerRepository } from "@/infrastructure/database/Memory/repositories/Player.repository";

export const exchangeCard = (dto: PlayerIndexCardDTO) => {

    const gameOrm = new GameRepository()
    
    const playerOrm = new PlayerRepository()

    const game = gameOrm.getByPlayerID(dto.playerID);
                
    const player = playerOrm.getByID(dto.playerID)
        
    console.log("Trocar carta")

    const card = player.hand[dto.indexCard];

    player.hand[dto.indexCard] = new Card(player.purchased.rank, player.purchased.suit)

    player.purchased.rank = -1;

    game.discard.push(new Card(card.rank, card.suit))

    game.isCut = false;
    game.playerBuy = false;

    gameOrm.save(game)

    playerOrm.save(player)

    return {
        res: {
            playerID: player.id,
            indexCard: dto.indexCard
        },
        roomID: game.roomId
    } as PlayerIndexCardResDTO
    
}