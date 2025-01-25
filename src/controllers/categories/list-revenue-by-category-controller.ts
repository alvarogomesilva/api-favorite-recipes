import { Request, Response } from "express";
import { ListRevenueByCategoryService } from "../../services/categories/list-revenue-by-category-service";

export class ListRevenueByCategoryController {
    async handle(req: Request, res: Response) {

        const id_category = req.query.id_category as string

        try {
            const list = new ListRevenueByCategoryService()
            const revenues = await list.execute({ id_category })

            res.status(200).json(revenues)
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}