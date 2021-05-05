const {
  MongooseRegModel,
  MongooseVehicleModel
} = require('./mongoose-schema.js')

// HELPER FUNCTIONS FOR POST REQUEST
const checkIfVehicleExists = async function (newFaultRecord) {
  return await MongooseVehicleModel.findOne(
    {
      make: newFaultRecord.make,
      model: newFaultRecord.model
    }
  )
}

const checkIfRegExists = async function (newFaultRecord) {
  return await MongooseRegModel.findOne(
    {
      reg: newFaultRecord.reg
    }
  )
}

module.exports = { checkIfVehicleExists, checkIfRegExists }
