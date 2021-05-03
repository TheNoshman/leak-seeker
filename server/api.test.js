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


afterAll(async () => {
  await mongoose.connection.close();

});