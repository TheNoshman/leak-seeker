
require('dotenv').config();
const mongoose = require('./model.js');

const vehCollection = process.env.VEHICLECOLLECTION;
const regCollection = process.env.REGCOLLECTION;

// FAULT RECORD SCHEMA
const vehicleData = new mongoose.Schema({
  make: {
    type: 'String',
    required: true,
  },
  model: {
    type: 'String',
    required: true,
  },
  faults: {
    type: ['Mixed'],
  },
});

// API MOCK REG SEARCH RESULT SCHEMA
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
});


const mongooseRegModel = mongoose.model(regCollection, regToModel);
const mongooseVehicleModel = mongoose.model(vehCollection, vehicleData);

module.exports = { mongooseRegModel, mongooseVehicleModel };
