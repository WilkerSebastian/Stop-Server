import { gerarID } from "@/infrastructure/shared/gerarID";

export class Room {

    public readonly id: string;

    public hostID: string;
    public playersId: number[];
    public password?: string
    public isPublic: boolean

    constructor(hostID: string, password?: string) {

        this.id = gerarID();
        this.hostID = hostID;
        this.playersId = []
        this.password = password
        this.isPublic = typeof password !== "string" 

    }

}