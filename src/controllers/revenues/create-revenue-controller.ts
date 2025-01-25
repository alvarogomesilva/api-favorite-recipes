import { Request, Response } from "express";
import { CreateRevenueService } from "../../services/revenues/create-revenue-service";
import sharp from "sharp";
import { unlink } from "fs/promises";

sharp.cache(false)

export class CreateRevenueController {
    async handle(req: Request, res: Response) {
        const id_user = req.userId
        const { title, description, id_category, ingredients, preparation_mode } = req.body

        let image: string | undefined;
       
        if (req.file) {
            const extension = req.file.mimetype.substring(6);
            const randomName = Math.floor(Math.random() * 999999999) + Date.now();
            await sharp(req.file.path)
                .resize(400, 400)
                .toFile(`./uploads/revenues/${randomName}.${extension}`);

            image = `${randomName}.${extension}`;
            await unlink(req.file.path);
        }   

        try {
            const create = new CreateRevenueService()
            const revenues = await create.execute({
                title,
                id_user,
                description,
                id_category,
                image,
                ingredients,
                preparation_mode
            })
            res.status(201).json(revenues)
            
        } catch (error: any) {
            res.status(error.status).json({ [`message-error-${error.status}`]: error.message })
        }
    }
}