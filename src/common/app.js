import express from "express";
import helmet from "helmet";
import compression from "compression";
import RootRouter from "../routes/index.js";
import db from "./db.js";
import "dotenv/config";
import dotenv from "dotenv";
import errorHandlerAll from "./error.js";
import logger from "./logger.js";
import limiter from "./rateLimiter.js";

dotenv.config();

try {
    await db.authenticate();

    if(process.env.EZJSBLOG_MODE == "init"){
        await db.sync();
    }
    console.log("db connection OK!");
}catch(e){
    console.error(`db connection failed! .. ${e}`)
}

// Our app
const app = express()

// Middleware
app.use(helmet());
app.use(limiter);
app.use(compression());
app.use(express.json());
app.use(logger);
app.use(RootRouter);
app.use(errorHandlerAll);

export default app;