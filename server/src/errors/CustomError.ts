import { HttpError } from "./HttpError.js";

export class CustomError extends HttpError {
    constructor(message: string, statusCode: number, errorMessage: string) {
        super(message, statusCode, errorMessage)
    }
}