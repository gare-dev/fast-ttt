export class HttpError extends Error {
    statusCode: number
    errorMessage: string


    constructor(message: string, statusCode: number, errorMessage: string) {
        super(message)
        this.name = "HttpError"
        this.statusCode = statusCode
        this.errorMessage = errorMessage
    }
}