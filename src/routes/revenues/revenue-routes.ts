import { Router } from "express";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { CreateRevenueController } from "../../controllers/revenues/create-revenue-controller";

const route = Router()

route.post('/revenue', isAutenticated, new CreateRevenueController().handle)

export { route as revenueRoutes }