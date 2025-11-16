import { WsServer } from "../WsServer"

export const errorHandlerMiddleware = (func: any, roomID?: string) => {

    try {

        func()

    } catch(e) {

        const error = e as Error

        if (roomID) {

            WsServer.io.to(roomID).emit("error", {  
                name: error.name,
                content: error.message
            })

        }

        console.log(e);

    }

}