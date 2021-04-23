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
  faults: [{
    summary: {
      type: 'String',
    },
    description: {
      type: 'String',
    },
    year: {
      type: 'Number',
    },
    area: {
      type: 'String',
    },
    priceToFix: {
      type: 'Number',
    },
    faultLogged: {
      type: 'Number',
    },
    rating: {
      type: 'Number',
    },
  }]
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
