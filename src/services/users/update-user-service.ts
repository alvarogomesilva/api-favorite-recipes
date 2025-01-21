import { UpdateUserDTO } from "../../@types/users/update-user.dto";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class UpdateUserService {
    async execute(data: UpdateUserDTO) {
        const { id_user, name, email } = data;

        if (!id_user) throw new HttpException('usuário inválido', 400)

        if (name === "") throw new HttpException('nome não pode ser vazio', 400)
        

        if (email === "") throw new HttpException('email não pode ser vazio', 400)
        

        try {
            const users = await prisma.user.update({ where: { id_user }, data: { name, email },
                select: {
                    id_user: true, 
                    name: true, 
                    email: true, 
                    password: false, 
                    created_at: true,
                    updated_at: true
                }
            })
            
            return users
        } catch (error) {
            console.log(error)
        }
    }
}