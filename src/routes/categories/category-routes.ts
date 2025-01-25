import { Router } from "express";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { CreateCategoryController } from "../../controllers/categories/create-category-controller";
import { ListRevenueByCategoryController } from "../../controllers/categories/list-revenue-by-category-controller";


const route = Router()

route.post('/v1/categories', isAutenticated, new CreateCategoryController().handle)
route.get('/v1/categories', isAutenticated, new ListRevenueByCategoryController().handle)

export { route as categoriesRoutes }