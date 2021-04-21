const mongooseModel = require('./mongoose-schema.js')

// GET REQUEST
const getFunction = async function (req, res) {
  try {
    const allDocs = await mongooseModel.find((err, docs) => {return docs})
    // find one doc from collection
    // const oneDoc = await mongooseModel.findOne({ name: 'test' }, (err, docs) => {console.log('findOne = ', docs)})
    res.send(allDocs)
  } catch (error) {
    console.error('Failed to get document from database, error -> ', error);
  }
};

// POST REQUEST
const postFunction = async function (req, res) {
  try {
  const requestBody = req.body;
  console.log(requestBody)
  const doc = new mongooseModel({
    make: requestBody.make,
    model: requestBody.model,
    year: requestBody.year,
    faults: requestBody.faults,
  });
  await doc.save();
  res.send(`Saved POST request to database`)
  } catch (error) {
    console.error('Failed to save document to database, error -> ', error);
  }
}

// PUT / UPDATE REQUEST
const updateFunction = async function (req, res) {
  // MIGHT BE AN OBJECT, MAYBE NEEDS DESTRUCTURING
  const {name, newValue} = req.params
  // console.log(name, newValue)
  try {
    // Returns an array, we want the json object
    const doc = await mongooseModel.find({name: name});
    doc[0].age = newValue;
    console.log(doc)
    await doc[0].save()
    res.send(`Update request success`)
  } catch (error) {
    console.error('Failed to find and update document from database, error -> ', error);

  }
}

// DELETE REQUEST
const deleteFunction = async function (req, res) {
  const {name} = req.params
  console.log(name)
  try {
    await mongooseModel.findOneAndRemove({name: name});
    res.send(`Delete request success`)
  } catch (error) {
    console.error('Failed to find and remove document from database, error -> ', error);

  }
}

















module.exports = { getFunction, postFunction, updateFunction, deleteFunction };




