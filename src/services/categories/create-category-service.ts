import { prisma } from "../../config/prisma"
import { HttpException } from "../../validators/HttpException"

export class CreateCategoryService {
    async execute({ title }: { title: string }) {

        if (!title) {
            throw new HttpException('categoria inválida', 400)
        }

        const categoryExists = await prisma.category.findFirst({ where: { title } })

        if(categoryExists) {
            throw new HttpException('categoria já existe', 409)
        }

        try {
            const categories = await prisma.category.create({ data: { title } })
            return categories;
        } catch (error) {
            console.log(error)
        }
    }
}