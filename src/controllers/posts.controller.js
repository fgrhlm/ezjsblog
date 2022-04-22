import PostsService from "../services/posts.service.js";

const PostsController = {
	_findOne: async (req,res) => {
		const id = req.params.id;
        
		const query = await PostsService._findOne(id);
		return res.status(200).json(query);
    },
    _findAll: async (req,res) => {
		const query = await PostsService._findAll();
		return res.status(200).json(query);
    },
    _create: async (req,res) => {
		const newPost = {
			"title": req.body.title,
			"body": req.body.body
		}

		const query = await PostsService._create(newPost);
		return res.status(201).json(query);
    },
    _delete: async (req,res) => {
		const id = req.params.id;

		const query = await PostsService._delete(id);
		return res.status(200).json(query);
    },
    _update: async (req,res) => {
		const updatedPost = {
			"id": req.params.id,
			"title": req.body.title,
			"body": req.body.body
		}

		const query = await PostsService._update(updatedPost);
		return res.status(200).json(query);
    }
}

export default PostsController;