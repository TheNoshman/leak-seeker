const request = require('supertest');
const app = require('./index');
const mongoose = require('mongoose');


describe('GET /getallfaults',() => {
  test('should respond with an array of faults', done => {
  request(app)
  .get('/getallfaults')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(200, done)
  })
})

describe('GET /search/:reg', () => {
  test('should return a selected fault', done => {
    request(app)
    .get('/search/FDFDF')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err) => {
      if(err) return done(err)
      done();
    })
  })

  test('should return an error message if reg doesnt exist', done => {
    request(app)
      .get('/search/jgjfgj')
      .expect(404)
      .expect(/Fault not found/)
      .end((err) => {
        if(err) return done(err)
        done()
      })
  })
})

describe('POST /addfault', () => {
  test('should respond with 201 created', done => {
    const data = {
      reg: "AB12ABC",
      make: "Ford",
      model: "Falcon",
      faults: [
          {
              summary: "Front suspension top mounts rusting",
              description: "I took my car into the garage to have a regular service ",
              priceToFix: 600,
              rating: 154,
              area: "drivetrain",
              year: 2016,
              faultLogged: "2016-04-27T10:28:32.645Z"
          }
      ]
    }
    request(app)
    .post('/addfault')
    .send(data)
    // .set('Accept', 'application/json')
    // .expect('Content-Type', /json/)
    .expect(201)
    .end((err) => {
      if(err) return done(err)
      done();
    })
  })

  test('responds with 400 on bad request', done => {
    const data = {}
    request(app)
      .post('/addfault')
      .send(data)
      .expect(400)
      .expect(/User not created/)
      .end((err) => {
        if(err) return done(err)
        done();
      })
  })
})


afterAll(async () => {
  await mongoose.connection.close();

});