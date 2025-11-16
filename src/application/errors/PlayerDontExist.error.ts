export class PlayerDontExistError extends Error {
    constructor(id?: number) {
        super(
            id ?
            `Player com id: ${id}, não existe!` 
            :
            `Player não existe.`);
        this.name = "PlayerDontExistError"
    }
}