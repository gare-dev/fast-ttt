import { HttpError } from "./HttpError.js";

export class BadRequestError extends HttpError {
    constructor(message = "Requisição inválida", errorMessage = "INVALID_REQUEST") {
        super(message, 400, errorMessage)
    }
}