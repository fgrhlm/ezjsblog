const errorHandlerAll = (error,req,res,next) => {
    // Catch all error handler
    // Returns 500 on all errors
    console.error(error.stack);
    res.status(500).json({"message": "internal error"});
}

export default errorHandlerAll;