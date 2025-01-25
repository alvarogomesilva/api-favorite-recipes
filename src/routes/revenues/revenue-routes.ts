import { Router } from "express";
import { isAutenticated } from "../../middlewares/isAutenticated";
import { CreateRevenueController } from "../../controllers/revenues/create-revenue-controller";
import upload from "../../config/multer";

const route = Router()

route.post('/v1/revenues', isAutenticated, upload.single('file'), new CreateRevenueController().handle)

export { route as revenueRoutes }