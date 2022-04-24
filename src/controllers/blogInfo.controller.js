import BlogInfoService from "../services/blogInfo.service.js";

const BlogInfoController = {
	_get: async (req,res) => {
        const info = await BlogInfoService._get();

        if(info){
            return res.status(200).json(info);
        }else{
            return res.status(500).json({"message": "could not get blog info!"});
        }
    }
}

export default BlogInfoController;