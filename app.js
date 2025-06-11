import express from 'express';
import { config } from 'dotenv';
import userRouter from './routes/users.route.js';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.middleware.js';
import cors from "cors";

export const app = express();

config({
    path: "./config/config.env"
});

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL, 'http://localhost:5173'],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use("/api/v1/users", userRouter);

app.get('/', (req, res) => {
    res.send("Server is running!");
});

app.use(errorMiddleware)