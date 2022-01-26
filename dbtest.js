const { create } = require('domain')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/categoryTestDB')
let db = mongoose.connection
db.on('connected', ()=>"connected to mongodb")

const categorySchema = new mongoose.Schema({
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
})


const Category = mongoose.model('Category', categorySchema)
//const Category = require('./models/Category.js')
function makePoi(data){

    Category.create(data).then(testLocation =>{
        console.log(data)
        console.log(testLocation)
        process.exit()
    })
}


const testPerson = {
    name: "ATL Zoo",
    location: "Downtown",
    hours: "9am to 9pm",
    payForEntrance: true,
    category: 'landmarks',
    city: 'Atlanta'
}

makePoi(testPerson)