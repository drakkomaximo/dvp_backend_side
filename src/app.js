import express from "express";
import userRoute from './routes/users.routes.js'
import authRoute from './routes/auth.routes.js'
import indexRoute from './routes/index.routes.js'
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));
app.use(express.json())

app.use(indexRoute);
app.use('/api', authRoute);
app.use('/api', userRoute);

export default app;