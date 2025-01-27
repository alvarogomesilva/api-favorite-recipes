import { Router } from "express";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { CreateRevenueController } from "../../controllers/revenues/create-revenue-controller";
import upload from "../../config/multer";
import { ListRevenueByNameController } from "../../controllers/revenues/list-revenue-by-name-controller";
import { ListRevenueByIngredientsController } from "../../controllers/revenues/list-revenue-by-ingredients-controller";

const route = Router()

route.post('/v1/revenues', isAutenticated, upload.single('file'), new CreateRevenueController().handle)
route.get('/v1/revenues', isAutenticated, new ListRevenueByNameController().handle)
route.get('/v1/revenues/ingredients', isAutenticated, new ListRevenueByIngredientsController().handle)

export { route as revenueRoutes }