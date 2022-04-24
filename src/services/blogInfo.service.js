const BlogInfoService = {
    /*
        Constructs a response object from environment variables
        and returns it.
    */
    _get: async () => {
        const blogInfo = {
            "name": process.env.BLOG_NAME,
            "contact": process.env.CONTACT
        }

        return blogInfo;
    }
}

export default BlogInfoService;