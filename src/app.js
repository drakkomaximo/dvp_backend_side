import express from "express";
import userRoute from './routes/users.routes.js'
import morgan from "morgan";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())

app.use('/api/v1', userRoute);

export default app;