const express = require('express')
const songRoutes = require('./routes/song.route')  //   // step 1

const app = express()


app.use(express.json())

app.use('/',songRoutes)    // step 2 :- app.use('/', songRoutes) = Main app ko bata raha hai ki / path pe songRoutes router use karo.


module.exports = app