import { UserSessionRepository } from "../repositories/UserSessionRepository";
import { v4 as uuidv4 } from 'uuid'


export class UserSessionService {
    constructor(private repository: UserSessionRepository) { }

    async createSession(username: string) {
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
}