export class GameDontExistError extends Error{
    constructor(id?: string) {
        super(
            id ?
            `Jogo com id: ${id}, não existe!` 
            :
            `Jogo não existe.`);
        this.name = "GuestUserDontExistError"
    }
}