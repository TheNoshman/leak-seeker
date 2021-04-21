// SCHEMA - DEFINES THE STRUCTURE OF DOCUMENT
// MODEL - BASED ON THE SCHEMA; PROVIDES INTERFACE TO BE ABLE TO HANDLE DATA

// MONGOOSE AUTOMATICALLY ASSIGNS A UNIQUE ID
require('dotenv').config();
const mongoose = require('./model.js');

const vehCollection = process.env.VEHICLECOLLECTION;
const regCollection = process.env.REGCOLLECTION;

const vehicleData = new mongoose.Schema({
  make: {
    type: 'String',
    required: true,
  },
  model: {
    type: 'String',
    required: true,
  },
  yearFrom: {
    type: 'Number',
    required: true,
  },
  yearTo: {
    type: 'Number',
    required: true,
  },
  faults: {
    type: ['Mixed'],
  },
  __v: {
    type: 'Number',
  },
});

const regToModel = new mongoose.Schema({
  reg: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
});

// 'COLLECTIONNAME' IS THE NAME OF THE COLLECTION. ENSURE THIS IS CORRECT
// HAS AN EXTRA s ADDED, PLURALISED
const mongooseRegModel = mongoose.model(regCollection, regToModel);
const mongooseVehicleModel = mongoose.model(vehCollection, vehicleData);

module.exports = { mongooseRegModel, mongooseVehicleModel };
