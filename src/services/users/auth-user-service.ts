import { compareSync } from "bcryptjs";
import { AuthUserDTO } from "../../@types/users/auth-user.dto";
import { prisma } from "../../config/prisma";
import { HttpException } from "../../validators/HttpException";
import { sign } from "jsonwebtoken";

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

            const token = sign({
                id_user: userExists.id_user,
                email: userExists.email
            },
                process.env.JWT_SECRET as string,
                { subject: userExists.id_user, expiresIn: '1d' }
            )

            return {
                id_user: userExists.id_user,
                name: userExists.name,
                email: userExists.email,
                token: token
            }


        } catch (error) {
            console.log(error)
        }

    }
}