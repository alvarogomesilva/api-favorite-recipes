import { Router } from "express";
import { CreateUserController } from "../../controllers/users/create-user-controller";
import { AuthUserController } from "../../controllers/users/auth-user-controller";

const route = Router()

route.post('/users', new CreateUserController().handle)
route.post('/auth', new AuthUserController().handle)

export { route as routes }