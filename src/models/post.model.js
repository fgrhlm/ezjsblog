import { DataTypes } from "sequelize"; 
import { db } from "../common/db.js";

const PostModel = db.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING
})

export default PostModel;