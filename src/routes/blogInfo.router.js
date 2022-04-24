import { Router } from "express";
import BlogInfoController from "../controllers/blogInfo.controller.js";

const BlogInfoRouter = Router();

BlogInfoRouter.get("/", BlogInfoController._get);

export default BlogInfoRouter;