import { GuestUserDontExistError } from "@/application/errors/GuestUserDontExist.error";
import { User } from "@/domain/entities/GuestUser";
import { IUserRepository } from "@/domain/repositories/IUserRepository";

export class UserRepository implements IUserRepository {

    private static data = new Map<string, User>

    getByID(id: string): User {
        
        const room = UserRepository.data.get(id)
        
        if (!room)
            throw GuestUserDontExistError

        return room

    }
    existByID(id: string): boolean {
        return UserRepository.data.has(id)
    }

    save(user: User): void {
        UserRepository.data.set(user.id, user)
    }

    delete(user: User): void {
        UserRepository.data.delete(user.id)
    }

}