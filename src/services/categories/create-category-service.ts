import { prisma } from "../../config/prisma"
import { HttpException } from "../../validators/HttpException"

export class CreateCategoryService {
    async execute({ title }: { title: string }) {

        if (!title) {
            throw new HttpException('categoria inválida', 400)
        }

        try {
            const categories = await prisma.category.create({ data: { title } })
            return categories;
        } catch (error) {
            console.log(error)
        }
    }
}