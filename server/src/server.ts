import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/fast-ttt'

export async function connectToDatabase() {
    try {
        await mongoose.connect(mongoUri)
    } catch (err) {
        console.error(`Error connecting to MongoDB! Error: ${err}`)
    }
}