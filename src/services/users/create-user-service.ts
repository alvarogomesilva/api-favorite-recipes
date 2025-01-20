import { CreateUserDTO } from "../../@types/users/create-user.dto";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";


export class CreateUserService {

    async execute(data: CreateUserDTO) {
        const { name, email, password } = data;

        if (!name || !email || !password) {
            throw new HttpException('Todos os campos são obrigatórios', 400)
        }

        const userAlredyExists = await prisma.user.findFirst({ where: { email } })

        if (userAlredyExists) {
            throw new HttpException('Usuário já cadastrado', 409)
        }
        
        try {
            const users = await prisma.user.create({ 
                data: { name, email, password },
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