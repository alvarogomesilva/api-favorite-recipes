import express, { json, static as static_ } from 'express';
import { usersRoutes } from './routes/users/user-routes';
import { categoriesRoutes } from './routes/categories/category-routes';
import { revenueRoutes } from './routes/revenues/revenue-routes';
import { resolve } from 'path';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(json())
app.use('/files', static_(resolve(__dirname, '..', 'uploads')))

app.use(usersRoutes)
app.use(categoriesRoutes)
app.use(revenueRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))