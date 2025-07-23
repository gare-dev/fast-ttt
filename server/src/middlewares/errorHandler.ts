import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/HttpError.js";


export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpError) {
        return res.status(err.statusCode).json({
            error: err.message,
            errorMessage: err.errorMessage
        })
    }

    console.error('Unexpected error. ' + err)
    return res.status(500).json({ error: "Server error." })
}