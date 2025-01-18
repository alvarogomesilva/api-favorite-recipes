import { Router } from "express";
import { InMemoryUserRepository } from "../infrastructure/repositories/in-memory-user-repository";
import { CreateUserUseCase } from "../useCases/users/create-user-useCase";
import { UserController } from "../controllers/user-controller";

const route = Router()

const userRepository = new InMemoryUserRepository()
const createUsers = new CreateUserUseCase(userRepository)
const userController = new UserController(createUsers)

route.get('/api', (req, res) => userController.create(req, res))

export { route as usersRoutes }