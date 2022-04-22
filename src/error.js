const errorHandlerAll = (error,req,res,next) => {
    console.error(error.stack);
    res.status(500).json({"message": "internal error"});
}

export default errorHandlerAll;