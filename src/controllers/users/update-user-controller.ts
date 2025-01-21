import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/update-user-service";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const id_user = req.userId
        const { name, email } = req.body

        try {
            const update = new UpdateUserService()
            const users = await update.execute({ id_user, name, email })
            
            res.json(users)

        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}