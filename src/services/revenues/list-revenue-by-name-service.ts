import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class ListRevenueByNameService {

    async execute({ title }: { title: string }) {

        if (!title) {
            throw new HttpException('nome da receita inválido', 400)
        }

        try {
            const revenueExists = await prisma.revenue.findFirst({ 
                where: { title },
                include: { category: { select: { title: true } } }
            })

            if (!revenueExists) {
                throw new HttpException('receita não existe', 404)
                
            } else {
                return {
                    id_revenue: revenueExists.id_revenue,
                    title: revenueExists.title,
                    id_category: revenueExists.category.title,
                    description: revenueExists.description,
                    ingredients: revenueExists.ingredients,
                    preparation_mode: revenueExists.preparation_mode,
                    image: `http://localhost:3000/v1/files/revenues/${revenueExists.image}`
                }
            }

        } catch (error: any) {
            throw new HttpException('erro interno no servidor', error.status)
        }
    }
}