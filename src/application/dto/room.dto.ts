export interface JoinConfigDTO {
    host: number
    rules: GameRules
    players: Players
    identifier: number
}

export interface RoomDTO {
    roomID: string
}

export interface JoinRoomDTO {
    roomID: string,
    userID: string
}

export interface CreateRoomDTO {
    userID: string
    password?: string
    rules: GameRules
    isPublic: boolean
}

export interface GameInitDTO { 
    playersCards: { 
        id: number, 
        cards: {rank: number, suit: number}[] 
    }[],  
    turn: number 
}