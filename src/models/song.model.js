const mongoose = require('mongoose')

const songscehma = new mongoose.Schema({
    title:String,
    artist:String,
    audio:String
})


const songmodel = mongoose.model('songmodel',songscehma)

module.exports = songmodel