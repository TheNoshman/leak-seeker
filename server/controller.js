const { MongooseRegModel, MongooseVehicleModel } = require('./mongoose-schema.js')

// CHECK-IF-DATA-EXISTS HELPER FUNCTIONS
const { checkIfVehicleExists, checkIfRegExists } = require('./helpers')

// GET ALL VEHICLE RECORDS REQUEST
const getFunction = async function (req, res) {
  try {
    const allDocs = await MongooseVehicleModel.find()
    // find one doc from collection
    // const vehicleRecord = await MongooseVehicleModel.findOne({ name: 'test' }, (err, docs) => {console.log('findOne = ', docs)})
    res.status(200).send(allDocs)
    console.log('get request success')
  } catch (error) {
    console.error('Failed to get document from database, error -> ', error)
  }
}

// THIS WILL BE THE MAIN GET REQUEST
// GET SPECIFIC VEHCILE RECORDS FROM REG REQUEST
const getFaultsFromReg = async function (req, res) {
  console.log(req.params.reg)
  try {
    const regToVehicle = await MongooseRegModel.findOne(
      { reg: req.params.reg }
      // (err, record) => {
      // console.log('regToVehicle = ', record);
      // }
    )

    const vehicleRecord = await MongooseVehicleModel.findOne(
      {
        make: regToVehicle.make,
        model: regToVehicle.model
      }
      // (err, record) => {
      // console.log('vehicleRecord = ', record);
      // }
    )

    res.status(200).send(vehicleRecord)
    console.log('get request success, send data -> ', vehicleRecord)
  } catch (error) {
    console.error('Failed to get document from database, error -> ', error)
  }
}

// ADD FAULT POST REQUEST
// TO-DO -> ADD RESPONSES WITH INTERPOLATION TO ADVISE WHAT HAS BEEN DONE
const addFault = async function (req, res) {
  const requestBody = req.body
  console.log(requestBody.faults)
  let veh = false

  // IF VEHICLE MAKE & MODEL EXISTS, ADD NEW FAULTS TO EXISTING RECORD
  if (await checkIfVehicleExists(requestBody)) {
    veh = true
    const record = await checkIfVehicleExists(requestBody)
    record.faults.push(...requestBody.faults)
    await record.save()
  }

  // IF REG DOESNT EXIST IN DB, ADD REG + MAKE/ MODEL TO MOCK API COLLECTION DB
  if (!(await checkIfRegExists(requestBody))) {
    const regRecord = new MongooseRegModel({
      reg: requestBody.reg,
      make: requestBody.make,
      model: requestBody.model
    })
    await regRecord.save()
  }
  // IF VEHICLE FAULT RECORD DOESNT EXIST, CREATE IT
  if (veh === false) {
    const faultRecord = new MongooseVehicleModel({
      make: requestBody.make,
      model: requestBody.model,
      faults: requestBody.faults
    })
    await faultRecord.save()
    // EDIT THIS
    res.status(200).send('Saved POST request to database')
  }
}

// PUT / UPDATE REQUEST
const updateFunction = async function (req, res) {
  // // MIGHT BE AN OBJECT, MAYBE NEEDS DESTRUCTURING
  // const { name, newValue } = req.params;
  // // console.log(name, newValue)
  // try {
  //   // Returns an array, we want the json object
  //   const doc = await mongooseModel.find({ name: name });
  //   doc[0].age = newValue;
  //   console.log(doc);
  //   await doc[0].save();
  //   res.send(`Update request success`);
  // } catch (error) {
  //   console.error(
  //     'Failed to find and update document from database, error -> ',
  //     error
  //   );
  // }
}

// DELETE REQUEST
const deleteFunction = async function (req, res) {
  // const { name } = req.params;
  // console.log(name);
  // try {
  //   await mongooseModel.findOneAndRemove({ name: name });
  //   res.send(`Delete request success`);
  // } catch (error) {
  //   console.error(
  //     'Failed to find and remove document from database, error -> ',
  //     error
  //   );
  // }
}

module.exports = {
  getFunction,
  getFaultsFromReg,
  addFault,
  updateFunction,
  deleteFunction
}
