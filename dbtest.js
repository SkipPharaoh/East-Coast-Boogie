const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/eastCoastBoogie')
let db = mongoose.connection
db.on('connected', ()=> {
    main()
})


const Category = require('./models/Category.js')
const City = require('./models/City.js')


// Step1 : connect to MONGODB
// Step2 : Wipe the database for the city and category collections
// Step3 : Make ATL, DET, TAMPA, NY
// Step4 : Make all the places(categories)
// Step5 : Add the categories to the places using .save


// add cuisine to restaurants

async function main() {
    try {
        await wipeDatabase()
        await createAtlanta()
    } catch(err) {

    }
}



async function wipeDatabase() { 
    try {
        let deletedMessages = await Category.deleteMany({})
        console.log(deletedMessages)
        let cityDeletedMessage = await City.deleteMany({})
        console.log(cityDeletedMessage)
    } catch(err) {
        console.log(err)
    }
}

async function createAtlanta() {
    try {
        let atlanta = await City.create({ name: 'Atlanta' })
        let piedmontPark = await Category.create(place1)
        let centennialPark = await Category.create(place2)
        atlanta.categories.push(piedmontPark, centennialPark)
        atlanta.save()
    } catch(err) {
        console.log(err)
    }
}


const place1 = {
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
}
const place2 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
}
const place3 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}
const place4 = {
    name: "Atlanta Zoo",
    location: "Grant Park",
    hours: "9am to 3:30pm",
    payForEntrance: true,
    category: 'landmarks',
}
const place5 = {
    name: "Stone Mountain Park",
    location: "Stone Mountain",
    hours: "Closed Indefinitely",
    payForEntrance: false,
    category: 'landmarks',
}
const restaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
}
const restaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
}
const restaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
}
const restaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}
const event1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
}
const event2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
}