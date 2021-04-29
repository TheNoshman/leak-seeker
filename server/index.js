// START DATABASE SERVER THING
// npm init
// npm i express cors mongoose dotenv

require('dotenv').config()
const express = require('express')
const router = require('./router')
const cors = require('cors')
const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(router);

(async function bootstrap () {
  try {
    await app.listen(port)
    console.log(`Server launched on port ${port} 🚀🚀🚀`)
  } catch (error) {
    console.log('Cannot connect to server ->', error)
  }
})()
