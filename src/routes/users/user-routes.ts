import { Router } from "express";
import { CreateUserController } from "../../controllers/users/create-user-controller";
import { AuthUserController } from "../../controllers/users/auth-user-controller";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { UpdateUserController } from "../../controllers/users/update-user-controller";

const route = Router()

route.post('/users', new CreateUserController().handle)
route.patch('/users', isAutenticated, new UpdateUserController().handle)
route.post('/auth', new AuthUserController().handle)

export { route as usersRoutes }