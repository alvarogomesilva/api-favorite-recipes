import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/create-user-service";

export class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body

        try {
            const create = new CreateUserService()
            const users = await create.execute({ name, email, password })
            res.json(users)

        } catch (error) {
            console.log(error)
        }

    }
}