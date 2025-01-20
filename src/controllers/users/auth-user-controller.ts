import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/auth-user-service";

export class AuthUserController {

    async handle(req: Request, res: Response) {

        const { email, password } = req.body

        try {
            const auth = new AuthUserService()
            const users = await auth.execute({ email, password })

            res.json(users)

        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}