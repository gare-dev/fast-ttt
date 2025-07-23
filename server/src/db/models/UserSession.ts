import mongoose, { Schema, Document } from "mongoose"

export type CreateUserSessionDTO = {
    sessionId: string;
    username: string;
    wins?: number;
    defeats?: number;
    draws?: number;
    lastActive?: Date;
};

export interface IUserSession extends Document {
    sessionId: string
    username: string
    wins: number
    defeats: number
    draws: number
    lastActive: Date
}

const UserSessionSchema = new Schema<IUserSession>({
    sessionId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    wins: { type: Number, default: 0 },
    defeats: { type: Number, default: 0 },
    draws: { type: Number, default: 0 },
    lastActive: { type: Date, default: Date.now }
})

export const UserSession = mongoose.model<IUserSession>('UserSession', UserSessionSchema)
