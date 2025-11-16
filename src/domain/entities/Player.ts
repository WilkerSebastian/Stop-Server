import { Card } from "@/domain/entities/Card";

export class Player {

    id?: number

    userID: string

    hand: Card[] = [];

    purchased: Card = new Card(-1, 0);

    skill: number | null = null;

    name: string;

    points: number = 0

    constructor(name:string, userID: string){
        this.name = name;
        this.userID = userID
    }

}