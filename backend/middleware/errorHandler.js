class CustomError extends Error {
    constructor(status,message) {
        this.message = message;
        this.status = status;
    }
}

export const generateCustomError = (status,message) => {
    return new CustomError(status,message);
}

export const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        const {status, message} = err;
        return res.status(status).send({message});
    }

    return res.status(500).send({message: err.message || "Internal Server Error"});
}