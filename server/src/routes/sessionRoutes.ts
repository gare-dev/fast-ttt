import express from "express"
import { UserSessionRepository } from "../repositories/UserSessionRepository.js";
import { UserSessionService } from "../services/UserSessionService.js";


const router = express.Router()
const service = new UserSessionService(new UserSessionRepository())

router.post("/session", async (req, res) => {
    const { username } = req.body
    const newSession = await service.createSession(username)
    return res.status(201).json({
        sessionId: newSession.sessionId
    })
})

router.get("/sessions", async (req, res) => {
    const response = await service.returnAllSessions()
    return res.status(200).json({
        data: response
    })
})

export default router