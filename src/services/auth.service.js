import fs from "fs";
import jwt from "jsonwebtoken";

const AuthService = {
    _authorize: (reqKey) => {
        const key = fs.readFileSync(".key", "utf8");
        const sign = {"author": process.env.AUTHOR}
        const secret = process.env.JWT_SECRET;
        const opts = {expiresIn: "12h"};

        if(key === reqKey){

            const token = jwt.sign(sign,secret,opts);
            return token;
        }

        return "";
    }
}

export default AuthService;