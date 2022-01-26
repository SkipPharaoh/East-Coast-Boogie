const { create} = require('domain')
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
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
    city: 'Atlanta'
}
const testPerson1 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
    city: 'Atlanta'
}
const testPerson2 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
    city: 'Atlanta'
}
const testPerson3 = {
    name: "Atlanta Zoo",
    location: "Grant Park",
    hours: "9am to 3:30pm",
    payForEntrance: true,
    category: 'landmarks',
    city: 'Atlanta'
}
const testPerson4 = {
    name: "Stone Mountain Park",
    location: "Stone Mountain",
    hours: "Closed Indefinitely",
    payForEntrance: false,
    category: 'landmarks',
    city: 'Atlanta'
}
const restaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
    city: 'Atlanta'
}
const restaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
    city: 'Atlanta'
}
const restaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
    city: 'Atlanta'
}
const restaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
    city: 'Atlanta'
}
const event1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
    city: 'Atlanta'
}
const event2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
    city: 'Atlanta'
}

makePoi(testPerson)