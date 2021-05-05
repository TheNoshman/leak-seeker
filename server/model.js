const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.NODE_ENV !== 'test' ? process.env.URL : process.env.URL + '-test'

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      return console.log(err)
    } else {
      console.log('Mongoose connected 😎😎😎')
    }
  }
)

module.exports = mongoose
