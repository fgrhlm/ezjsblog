import { Sequelize } from "sequelize"

/*
    Init the ORM

    This project uses sqlite3 as its database.
    The storage key has two possible identities,
    while testing: "test.db" and in production: "blog.db".
    This helps control the state of the db when running the test script.
*/ 

// https://sequelize.org/api/v6/class/src/sequelize.js~sequelize
const db = new Sequelize(
    {
        dialect: "sqlite",
        storage: process.env.EZJSBLOG_MODE == "test" ? "test.db" : "blog.db",
        logging: false,
        sync: true
    }
);

const dbAuth = async () => {
    try {
        await db.authenticate();    // https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-authenticate
        await db.sync();            // https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-sync
    }catch(e){
        console.error(`db connection failed! .. ${e}`);
        process.exit();
    }
}

export {db, dbAuth};