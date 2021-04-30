const app = require('../index')
const mongoose = require('mongoose')
const request = require('supertest')(app)
const { mockData } = require('./mock.js')

afterAll(async () => {
  app.close()
  await mongoose.connection.dropDatabase()
  await mongoose.disconnect()
})

describe('Test Routes', () => {
  afterEach(async () => {
    try {
      await mongoose.connection.dropCollection(process.env.REGCOLLECTION)
      await mongoose.connection.dropCollection(process.env.VEHICLECOLLECTION)
    } catch (err) {
      return true
    }
  })

  it('should be able to add and retrieve faults on a make & model', async () => {
    let registeredFault = await request.get(`/search/${mockData.reg}`)
    expect(registeredFault.status).toBe(404)

    registeredFault = await request.post('/addfault')
      .set('Content-Type', 'application/json')
      .send({
        reg: mockData.reg,
        make: mockData.make,
        model: mockData.model,
        faults: mockData.faults
      })
    expect(registeredFault.status).toBe(201)
    expect(registeredFault.body.make).toEqual(mockData.make)
    expect(registeredFault.body.model).toEqual(mockData.model)
    expect(registeredFault.body.faults.length).toBe(mockData.faults.length)

    const faultFromDatabase = await request.get(`/search/${mockData.reg}`)
    expect(faultFromDatabase.body).toEqual(registeredFault.body)
  })
})
