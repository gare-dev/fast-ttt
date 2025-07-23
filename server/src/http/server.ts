// server/src/http/server.ts
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectToDatabase from '../db/connect.js'
import sessionRoutes from "./routes/session/sessionRoutes.js"
import { errorHandler } from '../middlewares/errorHandler.js'

dotenv.config()

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', sessionRoutes)

app.use(errorHandler)

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🟢 Server running on http://localhost:${PORT}`)
    })
})
