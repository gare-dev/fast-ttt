// server/src/http/server.ts
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sessionRoutes from "../routes/sessionRoutes.js"
import { errorHandler } from '../middlewares/errorHandler.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', sessionRoutes)

app.use(errorHandler)

export default app