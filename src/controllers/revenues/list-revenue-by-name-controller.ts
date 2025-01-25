import { Request, Response } from "express";
import { ListRevenueByNameService } from "../../services/revenues/list-revenue-by-name-service";

export class ListRevenueByNameController {
    async handle(req: Request, res: Response) {

        const title = req.query.title as string

        try {
            const list = new ListRevenueByNameService()
            const revenue = await list.execute({title})

            res.status(200).json(revenue)
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}