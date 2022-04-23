import PostsService from "../services/posts.service.js";

const PostsController = {
	_findOne: async (req,res) => {
		/* 
			Extracts the id of the wanted row.
			Sends it off to the posts-service.
		*/
		const id = req.params.id;

		if(id){
			const query = await PostsService._findOne(id);
			
			if(query){
				return res.status(200).json(query);
			}else{
				return res.status(404).json({"message": "no rows with matching id found."});
			}
		}
    },
    _findAll: async (req,res) => {
		/*
			Returns every row
		*/
		const query = await PostsService._findAll();
		if(query){
			return res.status(200).json(query);
		}else{
			return res.status(500).json({"message": "could not find any rows."})
		}
    },
    _create: async (req,res) => {
		/*
			Extracts the new post data from the request object.
			Sends it off to the posts-service.
		*/
		const newPost = {
			"title": req.body.title,
			"body": req.body.body
		}

		const query = await PostsService._create(newPost);
		if(query){
			return res.status(201).json(query);
		}else{
			return res.status(500).json({"message": "could not create a new post."})
		}
    },
    _delete: async (req,res) => {
		/*
			Extracts id from request object.
			Sends it off to the posts-service.
		*/
		const id = req.params.id;

		const query = await PostsService._delete(id);

		if(query){
			return res.status(200).json(query);
		}else{
			return res.status(500).json({"message": "could not delete row"});
		}
    },
    _update: async (req,res) => {
		/*
			Extracts the new post data from request object.
			Sends it off to the posts-service
		*/
		const updatedPost = {
			"id": req.params.id,
			"title": req.body.title,
			"body": req.body.body
		}

		const query = await PostsService._update(updatedPost);
		if(query){
			return res.status(200).json(query);
		}else{
			return res.status(500).json({"message": "could not update row"});
		}
    }
}

export default PostsController;