import express from "express";
import helmet from "helmet";
import compression from "compression";
import RootRouter from "../routes/index.js";
import {dbAuth} from "./db.js";
import "dotenv/config";
import dotenv from "dotenv";
import errorHandlerAll from "./error.js";
import logger from "./logger.js";
import limiter from "./rateLimiter.js";

dotenv.config();            // Load environment variables from .env
dbAuth();                   // Exit here if db connection fails

// Our app
const app = express()       // https://expressjs.com/en/5x/api.html       

// Middleware
app.use(helmet());          // https://www.npmjs.com/package/helmet
app.use(limiter);           // https://www.npmjs.com/package/express-rate-limit
app.use(compression());     // https://www.npmjs.com/package/compression
app.use(express.json());    // https://expressjs.com/en/5x/api.html#express.json
app.use(logger);            // https://www.npmjs.com/package/morgan
app.use(RootRouter);        // routes/index.js
app.use(errorHandlerAll);   // common/error.js

export default app;