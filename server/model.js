
const mongoose = require('mongoose');

// MAKE SURE THE LAST WORD IS THE CORRECT DATABASE NAME
const url = 'mongodb://localhost:27017/mongoosedb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if (err) return console.log(err);
  console.log('Mongoose connected 😎😎😎')
});



module.exports = mongoose;

