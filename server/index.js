// START DATABASE SERVER THING
// npm init
// npm i express cors mongoose

const express = require('express')
const router = require('./router');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json())
app.use(router);

(async function bootstrap () {
  try {
    await app.listen(port);
    console.log(`Server launching on port ${port} 🚀🚀🚀`)
  } catch (error) {
    console.log('cannot connect to server', error)
  }
})()