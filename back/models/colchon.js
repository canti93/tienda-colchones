const mongoose = require('mongoose')

const colchonSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
})

const Colchon = mongoose.model('colchon', colchonSchema)

module.exports = Colchon