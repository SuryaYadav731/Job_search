class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddleware = (err, req, res, next)=>{
    err.message = err.message || "internal server error";
    err.statusCode = err.statusCode || 500;

    if (err.name === "CaseError"){
        const message = ` Resource not found Invalid ${err.path}`;
        err = new ErrorHandler (message, 400);
    }
    if (err.code === "11000"){
        const message = `Diplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler (message, 400);
    }
    if (err.name === "JsonWebTokenError"){
        const message = `Json web token is invalid, try again`;
        err = new ErrorHandler (message, 400);
    }
    if (err.name === "TokenExpriedError"){
        const message =`Json web Token is expired`;
        err = new ErrorHandler (message, 400);
    }

    return res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};

export default ErrorHandler;