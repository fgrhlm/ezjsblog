import { Router } from "express";
import PostsController from "../controllers/posts.controller.js";
import jwtAuth from "../middleware/auth.js";

const PostsRouter = Router();

PostsRouter.get("/", PostsController._findAll);
PostsRouter.get("/:id",  PostsController._findOne);
PostsRouter.post("/", jwtAuth, PostsController._create);
PostsRouter.delete("/:id", jwtAuth, PostsController._delete);
PostsRouter.patch("/:id", jwtAuth, PostsController._update);


export default PostsRouter;