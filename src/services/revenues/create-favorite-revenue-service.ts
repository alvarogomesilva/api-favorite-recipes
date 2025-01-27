import { CreateFavoritRevenue } from "../../@types/revenues/create-favorite-revenue";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class CreateFavoritRevenueService {

    async execute(data: CreateFavoritRevenue) {
        const { id_revenue, id_user } = data
        
        if (!id_revenue) {
            throw new HttpException('receita inválida', 400)
        }

        if (!id_user) {
            throw new HttpException('usuário inválido', 400)
        }

        try {

            const revenue = await prisma.favorite.create({ data: { id_revenue, id_user } })
            return revenue
            
        } catch (error: any) {
            throw new HttpException('erro interno no servidor', error.status)
        }
    }
}