import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import seedRouter from "./routers/seedRouter.js";
import productRouter from "./routers/productRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import runServer from "./middleware/runServer.js";
import userRouter from "./routers/userRouter.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/seed', seedRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/users', userRouter);

app.use(errorHandler);
app.use(notFoundHandler);

runServer(app, process.env.MONGO_CONN, PORT);