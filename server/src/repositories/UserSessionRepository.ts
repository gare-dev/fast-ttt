import { CreateUserSessionDTO, IUserSession, UserSession } from "../db/models/UserSession.js";


export class UserSessionRepository {
    async create(session: CreateUserSessionDTO): Promise<IUserSession> {
        return await UserSession.create(session)
    }

    async findBySessionId(sessionId: string): Promise<IUserSession | null> {
        return await UserSession.findOne({ sessionId })
    }

    async findByUserName(username: string): Promise<IUserSession | null> {
        return await UserSession.findOne({ username })
    }

    async returnAllUsers(): Promise<IUserSession[] | null> {
        return await UserSession.find()
    }
}