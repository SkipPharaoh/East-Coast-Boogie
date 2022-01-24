const mongoose = require('mongoose')
const citiesSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }
})

const City = mongoose.model('City', citiesSchema)

module.exports = City