// SCHEMA - DEFINES THE STRUCTURE OF DOCUMENT
// MODEL - BASED ON THE SCHEMA; PROVIDES INTERFACE TO BE ABLE TO HANDLE DATA

// MONGOOSE AUTOMATICALLY ASSIGNS A UNIQUE ID

const mongoose = require('./model.js');

// CHANGE THIS TO MATCH DATA
// GET THIS FROM THE API
const newSchemea = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number
})

// 'COLLECTIONNAME' IS THE NAME OF THE COLLECTION. ENSURE THIS IS CORRECT
// HAS AN EXTRA s ADDED, PLURALISED
const mongooseModel = mongoose.model('tc', newSchemea)

module.exports = mongooseModel;