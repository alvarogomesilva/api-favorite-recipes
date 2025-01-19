import { Router } from "express";
import { CreateUserController } from "../../controllers/users/create-user-controller";

const route = Router()

route.post('/users', new CreateUserController().handle)

export { route as routes }