import express, { json } from 'express';
import { usersRoutes } from './routes/users/user-routes';
import { categoriesRoutes } from './routes/categories/category-routes';

const app = express();

app.use(json())


app.use(usersRoutes)
app.use(categoriesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))