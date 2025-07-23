import express from "express"
import { UserSessionRepository } from "../../repositories/UserSessionRepository";
import { UserSessionService } from "../../services/UserSessionService";


const router = express.Router()
const service = new UserSessionService(new UserSessionRepository())

router.post("/session", async (req, res) => {
    const { username } = req.body
    const newSession = await service.createSession(username)
    return res.status(201).json({
        sessionId: newSession.sessionId
    })
})

export default router