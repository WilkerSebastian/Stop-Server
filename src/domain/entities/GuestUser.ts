import { randomUUIDv7 } from "bun"

export class User {

    public readonly id: string
    public name: string

    constructor(name?: string) {
        this.id = randomUUIDv7("hex")
        this.name = name ?? "guest_" + this.id.split('-')[4] 
    }

}