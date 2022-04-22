import PostModel from "../models/post.model.js";

const PostsService = {
    _findOne: async (id) => {
        const query = await PostModel.findOne({
            where: {id: id}
        })

        return query
    },
    _findAll: async () => {
        const query = await PostModel.findAll({
            order: [
                ["updatedAt", "DESC"]
            ],
            attributes: ['id', 'title', 'createdAt']
        })
        
        return query;
    },
    _create: async (post) => {
        const newPost = await PostModel.create({
            title: post.title,
            body: post.body
        })

        return newPost;
    },
    _delete: async (id) => {
        const query = await PostModel.destroy({
            where: {id: id}
        })

        return query
    },
    _update: async (post) => {
        const query = await PostModel.update(
            {
                title: post.title,
                body:post.body
            },
            {
                where: {id: post.id}
            }
        )

        return query;
    }
}

export default PostsService;