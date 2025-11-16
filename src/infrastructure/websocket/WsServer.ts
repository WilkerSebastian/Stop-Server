import http from "http"
import { Server, Socket } from "socket.io";
import type { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "@/presentation/events/ServerEvents";
import { gamePlayerRouter } from "./router/gamePlayer.router";
import { roomRouter } from "./router/room.router";

export type SocketRouter = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export class WsServer {

    private constructor() {}
    
    public static io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;

    public static setIO(server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>){
        this.io = new Server(
            server, {
                cors: {origin:'*', methods:['GET', 'POST']}
            }
        )
    }

    public static init() {
        
        this.io.on("connection", (socket) => {
            gamePlayerRouter(socket)
            roomRouter(socket)
        })

    }

}