const mongoose = require('mongoose')

const somierSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
})

const Somier = mongoose.model('somier', somierSchema)

module.exports = Somier