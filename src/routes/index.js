import { Router } from "express";
import PostsRouter from "./posts.router.js";
import AuthRouter from "./auth.router.js";

// Root Router
const RootRouter = Router();

// Posts Router
RootRouter.use("/posts", PostsRouter);
RootRouter.use("/auth", AuthRouter);

export default RootRouter;