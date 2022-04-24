import { Router } from "express";
import PostsRouter from "./posts.router.js";
import AuthRouter from "./auth.router.js";
import BlogInfoRouter from "./blogInfo.router.js";

// Root Router
const RootRouter = Router();

// Add routers to root-router
RootRouter.use("/posts", PostsRouter);
RootRouter.use("/auth", AuthRouter);
RootRouter.use("/info", BlogInfoRouter);

export default RootRouter;