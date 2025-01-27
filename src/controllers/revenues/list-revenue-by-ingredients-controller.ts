import { Request, Response } from "express";
import { ListRevenueByIngredientsService } from "../../services/revenues/list-revenue-by-ingredients-service";

export class ListRevenueByIngredientsController {
    async handle(req: Request, res: Response) {
        const ingredients = req.query.ingredients as string

        try {
            const list = new ListRevenueByIngredientsService()
            const revenues = await list.execute({ ingredients })

            res.json(revenues)
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}