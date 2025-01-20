import { compareSync } from "bcryptjs";
import { AuthUserDTO } from "../../@types/users/auth-user.dto";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";

export class AuthUserService {
    async execute(data: AuthUserDTO) {

        const { email, password } = data;

        const userExists = await prisma.user.findFirst({ where: { email } })

            if (!userExists) {
                throw new HttpException('email/senha incorretos!', 401)
            }

            const passwordMatch = compareSync(password, userExists.password)

            if (!passwordMatch) {
                throw new HttpException('email/senha incorretos!', 401)
            }

            
        try {
            

            return { ok: true }

        } catch (error) {
            console.log(error)
        }

    }
}