import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export default async function connectToDatabase() {
    try {
        const uri = process.env.MONGO_URI

        if (!uri) throw new Error("MONGO_URI is not defined on .env")
        await mongoose.connect(uri)
        console.log("🟢 Connected to MongoDB.")
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1)
    }
}
