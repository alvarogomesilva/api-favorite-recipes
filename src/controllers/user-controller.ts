import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/users/create-user-useCase";

export class UserController {
    constructor(private createUsers: CreateUserUseCase) {}

    async create(req: Request, res: Response) {
        const users = await this.createUsers.execute();
        res.json(users);
    }
}