const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.MONGODB_url)
.then(()=>{
    console.log('db is connected')
})
.catch((err)=>{
    console.log('err is ' ,err)
})

module.exports = connection