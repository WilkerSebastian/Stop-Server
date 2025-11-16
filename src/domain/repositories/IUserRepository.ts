import { User } from "../entities/GuestUser"

export interface IUserRepository {
    getByID(id: string): User
    existByID(id: string): boolean
    save(user: User): void
    delete(user: User): void
}