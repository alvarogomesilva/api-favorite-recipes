import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class ListRevenueByCategoryService {
    async execute({id_category}: {id_category: string}) {


        if (!id_category) {
            throw new HttpException('categoria inválida', 400)
        }

        const category = await prisma.category.findFirst({ where: { id_category } })

        if (!category) {
            throw new HttpException('categoria não existe', 404)
        }

        try {

            const revenues = await prisma.revenue.findMany({
                where: { id_category },
                select: {
                    id_revenue: true,
                    id_category: true,
                    title: true,
                    image: true,
                    description: true,
                    ingredients: true,
                    preparation_mode: true,
                    created_at: false,
                    updated_at: false
                }
            })
            return revenues
        } catch (error: any) {
            throw new HttpException('erro interno no servidor', error.status)
        }
    }
}