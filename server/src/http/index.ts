import connectToDatabase from '../db/connect.js'
import app from "./server.js"

const PORT = process.env.PORT || 3333

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🟢 Server running on http://localhost:${PORT}`)
    })
})
