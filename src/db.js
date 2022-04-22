import { Sequelize } from "sequelize"

// Init Sequelize
const db = new Sequelize(
    {
        dialect: "sqlite",
        storage: "blog.db",
    }
);

export default db;