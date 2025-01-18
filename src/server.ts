import express, { json } from 'express';
import { usersRoutes } from './routes/user-routes';

const app = express();

app.use(json())

app.use("/api", usersRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))