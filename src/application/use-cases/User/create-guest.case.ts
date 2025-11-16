import { CreateGuestUserReponseDTO } from "@/application/dto/user.dto"
import { User } from "@/domain/entities/GuestUser"
import { UserRepository } from "@/infrastructure/database/Memory/repositories/GuestUser.repository"

export const createGuestUser = () => {

    const orm = new UserRepository()

    const user = new User()

    orm.save(user)

    return {
        id: user.id,
        name: user.name
    } as CreateGuestUserReponseDTO

}