import { UserRepository } from "../../@core/repositories/user-repository";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute() {
        return await this.userRepository.create()
    }
}