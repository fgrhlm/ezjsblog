import AuthService from "../services/auth.service.js";

const AuthController = {
	_authorize: async (req,res) => {
        /* 
            Extracts the given key from the request body.
            Sends it off to the authentication service for comparison.
            If the keys are a match the authentication service will
            return a valid JWT.
        */

        const reqKey = req.body.key;
        const token = await AuthService._authorize(reqKey);
        
        if(token.length > 0){
            return res.status(200).json({"token": token});
        }else{
            return res.status(500).json({"message": "auth failed!"});
        }
    }
}

export default AuthController;