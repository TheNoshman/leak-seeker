// SCHEMA - DEFINES THE STRUCTURE OF DOCUMENT
// MODEL - BASED ON THE SCHEMA; PROVIDES INTERFACE TO BE ABLE TO HANDLE DATA

// MONGOOSE AUTOMATICALLY ASSIGNS A UNIQUE ID
require('dotenv').config();
const mongoose = require('./model.js');

const collection = process.env.COLLECTION;

const vehicleData = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  faults: [{
    summary: String,
    description: String,
    area: String,
    priceToFix: Number,
    faultLogged: Number,
    score: Number,
  }],

});

// 'COLLECTIONNAME' IS THE NAME OF THE COLLECTION. ENSURE THIS IS CORRECT
// HAS AN EXTRA s ADDED, PLURALISED
const mongooseModel = mongoose.model(collection, vehicleData);

module.exports = mongooseModel;



