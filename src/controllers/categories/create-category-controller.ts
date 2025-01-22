import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/create-category-service";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { title } = req.body
        
        try {
            const create = new CreateCategoryService()
            const categories = await create.execute({title})

            res.json(categories)
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}