import { createGuestUser } from "@/application/use-cases/User/create-guest.case";
import { Request, Response } from "express";

export const userController = {

    async createGuest(req: Request, res: Response) {

        const dto = createGuestUser() 

        res.status(200).json({
            user: {
                id: dto.id,
                name: dto.name
            }
        })

    }

}