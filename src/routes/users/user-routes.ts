import { Router } from "express";
import { CreateUserController } from "../../controllers/users/create-user-controller";
import { AuthUserController } from "../../controllers/users/auth-user-controller";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { UpdateUserController } from "../../controllers/users/update-user-controller";

const route = Router()

route.post('/v1/users', new CreateUserController().handle)
route.patch('/v1/users', isAutenticated, new UpdateUserController().handle)
route.post('/v1/auth', new AuthUserController().handle)

export { route as usersRoutes }