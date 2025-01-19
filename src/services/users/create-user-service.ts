import { prisma } from "../../config/prisma";

interface IUser {
    name: string;
    email: string;
    password: string;
}

export class CreateUserService {

    async execute({name, email, password}: IUser) {
        if (!name) return { message: 'nome inválido!' }
        if (!email) return { message: 'email inválido!' }
        if (!password) return { message: 'senha inválida!' }

        try {
            const users = await prisma.user.create({ 
                data: { name, email, password },
                select: { 
                    id_user: true, 
                    name: true, 
                    email: true, 
                    password: true, 
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