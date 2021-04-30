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
    const collections = Object.keys(mongoose.connection.collections)
    collections.forEach(collection => {
      mongoose.connection.collections[collection].deleteMany({})
    })
  })

  it('should be able to add and retrieve faults on a make & model', async (done) => {
    let registeredFault = await request.get(`/search/${mockData.vehicle3.reg}`)
    expect(registeredFault.status).toBe(404)

    registeredFault = await request.post('/addfault')
      .set('Content-Type', 'application/json')
      .send({
        reg: mockData.vehicle3.reg,
        make: mockData.vehicle3.make,
        model: mockData.vehicle3.model,
        faults: mockData.vehicle3.faults
      })
    expect(registeredFault.status).toBe(201)
    expect(registeredFault.body.make).toEqual(mockData.vehicle3.make)
    expect(registeredFault.body.model).toEqual(mockData.vehicle3.model)
    expect(registeredFault.body.faults.length).toBe(mockData.vehicle3.faults.length)

    const faultFromDatabase = await request.get(`/search/${mockData.vehicle3.reg}`)
    expect(faultFromDatabase.body).toEqual(registeredFault.body)

    done()
  })

  it('should be able to return all vehicles from the database', async (done) => {
    let registeredVehicles = await request.get('/getallfaults')
    expect(registeredVehicles.status).toBe(200)
    expect(registeredVehicles.body.length).toBe(0)

    const vehicles = Object.keys(mockData)
    for (const vehicle of vehicles) {
      await request.post('/addfault')
        .set('Content-Type', 'application/json')
        .send({
          reg: mockData[vehicle].reg,
          make: mockData[vehicle].make,
          model: mockData[vehicle].model,
          faults: mockData[vehicle].faults
        })
    }

    registeredVehicles = await request.get('/getallfaults')
    expect(registeredVehicles.status).toBe(200)
    expect(registeredVehicles.body.length).toBe(vehicles.length)

    done()
  })
})
