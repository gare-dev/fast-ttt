import request from 'supertest'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import app from '../../../src/http/server'
import { UserSession } from '../../../src/db/models/UserSession'

describe('POST /session', () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create()
        const uri = mongoServer.getUri()
        await mongoose.connect(uri)
    })

    afterEach(async () => {
        await UserSession.deleteMany({})
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoServer.stop()
    })

    it('should create a new session', async () => {
        const response = await request(app).post('/api/session').send({ username: 'ui_tst' })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('sessionId')
    })

    it('should return a error if the name is already used', async () => {
        await request(app).post('/api/session').send({ username: 'ui_tst' })

        const response = await request(app).post('/api/session').send({ username: 'ui_tst' })

        expect(response.status).toBe(409)
        expect(response.body.errorMessage).toBe('REPEATED_USERNAME')
    })
})