import { Router } from "express";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { CreateCategoryController } from "../../controllers/categories/create-category-controller";


const route = Router()

route.post('/v1/categories', isAutenticated, new CreateCategoryController().handle)

export { route as categoriesRoutes }