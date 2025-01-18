import { User } from "../../@core/entities/User";
import { UserRepository } from "../../@core/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = []

    async create(users: User): Promise<User> {
        this.users.push(users)
        return users;
    }
}