require('dotenv').config()
const app = require('./src/app')
require('./src/db/db')
const songmodel = require('./src/models/song.model')








app.listen(3000,()=>{
    console.log('server is running on port 3000')
})