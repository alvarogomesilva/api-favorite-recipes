import { Request, Response } from "express";
import { CreateFavoritRevenueService } from "../../services/revenues/create-favorite-revenue-service";

export class CreateFavoriteRevenueController {

    async handle(req: Request, res: Response) {
        const id_user = req.userId
        const { id_revenue } = req.body

        try {
            const create = new CreateFavoritRevenueService()
            const revenue = await create.execute({ id_revenue, id_user })

            res.status(200).json(revenue)
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}