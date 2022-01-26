const mongoose = require('mongoose')
const citiesSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
})

const City = mongoose.model('City', citiesSchema)

module.exports = City