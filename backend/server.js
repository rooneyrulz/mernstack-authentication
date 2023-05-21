import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res, next) => res.send('Server is up and running :)'));

app.use(notFound);
app.use(errorHandler)


app.listen(PORT, () => console.log(`listening on port ${PORT}`));