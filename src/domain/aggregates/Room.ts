import { gerarID } from "@/infrastructure/shared/gerarID";

export class Room {

    public readonly id: string;

    public hostID: string;
    public playersId: number[];

    constructor(hostID: string) {

        this.id = gerarID();
        this.hostID = hostID;
        this.playersId = []

    }

}