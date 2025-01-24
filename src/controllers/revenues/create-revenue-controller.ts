import { Request, Response } from "express";
import { CreateRevenueService } from "../../services/revenues/create-revenue-service";

export class CreateRevenueController {
    async handle(req: Request, res: Response) {
        const id_user = req.userId
        const { title, description, id_category, ingredients, preparation_mode } = req.body

        try {
            const create = new CreateRevenueService()
            const revenues = await create.execute({
                title,
                id_user,
                description,
                id_category,
                ingredients,
                preparation_mode
            })
            res.status(201).json(revenues)
            
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}