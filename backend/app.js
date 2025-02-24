import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import http from 'http';
import seedRouter from "./routers/seedRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/seed', seedRouter);

app.use(errorHandler);
// app.use(notFoundHandler);

const server = http.createServer(app);

const start = () => {
    server.listen(PORT, () => {
        console.log(process.env.PORT);
        console.log(`Server is listening on port ${PORT}`);
    })
};

start();