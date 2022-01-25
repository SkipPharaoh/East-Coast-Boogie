const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    pointsOfInterest: {
        name: {
            type: String,
            // required: true
        },
        cuisine: {
            type: String,
            
        },
        location: {
            type: String
        },
        hours: {
            type: String
        },
        payForEntrance: {
            type: Boolean
        },
        category: {
            type: String,
            enum: ['landmarks','placesToEat','events'],
            // required: true
        },
        city: {
            type: String, 
            enum: ['Atlanta','Detroit','Tampa','New York'],
            // required: true
            
        }
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category