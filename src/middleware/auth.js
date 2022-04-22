import jwt from "jsonwebtoken";

const jwtAuth = (req,res,next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        req.authUser = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export default jwtAuth;