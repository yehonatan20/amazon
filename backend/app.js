import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import http from 'http';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const server = http.createServer(app);

const start = () => {
    server.listen(PORT, () => {
        console.log(process.env.PORT);
        console.log(`Server is listening on port ${PORT}`);
    })
};

start();