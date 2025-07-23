import { HttpError } from "./HttpError.js";


export class ConflictError extends HttpError {
    constructor(message = "Recurso em conflito", errorMessage = "RESOURCE_CONFLICT") {
        super(message, 409, errorMessage)
    }
}