import { CreateRevenueDTO } from "../../@types/revenues/create-revenue.dto";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class CreateRevenueService {
    async execute(data: CreateRevenueDTO ) {

        const { title, id_user, description, id_category, ingredients, preparation_mode, image } = data;

        if (!title || !description || !id_category || !ingredients || !preparation_mode) {
            throw new HttpException(`
                Preencha (nome, descrição, categoria, ingredientes e modo de preparo)`, 400)
        }

       
        try {
            const revenues = await prisma.revenue.create({
                data: { title, id_user, description, id_category, ingredients, preparation_mode }
            })
    
            return revenues
        } catch (error) {
            console.log(error)
        }
    }
}