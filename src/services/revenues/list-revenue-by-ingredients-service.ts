import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class ListRevenueByIngredientsService {
    async execute({ ingredients }: { ingredients: string }) {
        

        const ingredientesList = ingredients.split(',')

        if (!ingredients) {
            throw new HttpException('ingredientes inválidos', 400)
        }

        try {
            const revenues = await prisma.revenue.findMany({
                where: {
                    ingredients: {
                        hasSome: ingredientesList
                    }
                }
            })

            return revenues
        } catch (error: any) {
            throw new HttpException('erro interno no servidor', error.status)
        }
    }
}