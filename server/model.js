const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.URL;
const collection = process.env.COLLECTION;


mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(`Mongoose connected with collection -> ${collection} 😎😎😎`);
    }
  }
);

module.exports = mongoose;
