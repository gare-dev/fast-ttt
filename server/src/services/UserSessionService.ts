import validateNickname from "../../utils/validateNickname";
import { BadRequestError } from "../errors/BadRequest.js";
import { ConflictError } from "../errors/ConflictError.js";
import { UserSessionRepository } from "../repositories/UserSessionRepository.js";
import { v4 as uuidv4 } from 'uuid'


export class UserSessionService {
    constructor(private repository: UserSessionRepository) { }

    async createSession(username: string) {
        if (!validateNickname(username)) {
            throw new BadRequestError('Invalid username.', "INVALID_USERNAME")
        }
        const existing = await this.repository.findByUserName(username)

        if (existing) {
            throw new ConflictError('Username already used.', "REPEATED_USERNAME")
        }

        const sessionId = uuidv4()

        const newSession = await this.repository.create({
            sessionId,
            username,
            wins: 0,
            defeats: 0,
            draws: 0,
            lastActive: new Date()
        })

        return newSession
    }

    async returnAllSessions() {
        return await this.repository.returnAllUsers()
    }
}