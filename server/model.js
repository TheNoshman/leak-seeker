const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.URL || 'mongodb://localhost:27017/leak-seeker';



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
      console.log(`Mongoose connected 😎😎😎`);
    }
  }
);

module.exports = mongoose;


