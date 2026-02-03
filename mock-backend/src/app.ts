import express from 'express'
import cookieParser from 'cookie-parser';
import { geocacheRouter } from './routers/geocacheRouter';
import { authRouter } from './routers/authRouter';
import cors from "cors";
export const app = express();

app.use(cors()); // 👈 Enables CORS for all routes and origins

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/geocaches", geocacheRouter)

app.get("/", async (request, response) => {
    // Default route to test mock-api is running
    response.json({running: "ok"});
});
