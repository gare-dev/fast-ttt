import express from "express"
import cors from "cors"
import sessionRoutes from './routes/session'


const app = express()
app.use(cors())
app.use(express.json())
app.use(sessionRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})