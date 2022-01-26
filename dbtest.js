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


// ATLANTA

async function createAtlanta() {
    try {
        let atlanta = await City.create({ name: 'Atlanta' })
        // Landmarks
        let piedmontPark = await Category.create(atlLandmark1)
        let centennialPark = await Category.create(atlLandmark2)
        let georgiaAquarium = await Category.create(atlLandmark3)
        // Restaurants
        let sluttyVegan = await Category.create(atlRestaurant1)
        let theVarsity = await Category.create(atlRestaurant2)
        let waffleHouse = await Category.create(atlRestaurant3)
        let hattieB = await Category.create(atlRestaurant4)
        // Events
        let houseInThePark = await Category.create(atlEvent1)
        let trapBrunch = await Category.create(atlEvent2)

        atlanta.categories.push(
            // Landmarks
            piedmontPark, centennialPark, georgiaAquarium,
            // Restaurants
            sluttyVegan, theVarsity, waffleHouse, hattieB,
            //Events
            houseInThePark, trapBrunch
            )
        atlanta.save()
    } catch(err) {
        console.log(err)
    }
}


const atlLandmark1 = {
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark2 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark3 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}


const atlRestaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlEvent1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent3 = {
    name: "",
    location: "",
    hours: "",
    payForEntrance: false,
    category: "events"
}


// DETROIT

async function createAtlanta() {
    try {
        let atlanta = await City.create({ name: 'Atlanta' })
        // Landmarks
        let piedmontPark = await Category.create(atlLandmark1)
        let centennialPark = await Category.create(atlLandmark2)
        let georgiaAquarium = await Category.create(atlLandmark3)
        // Restaurants
        let sluttyVegan = await Category.create(atlRestaurant1)
        let theVarsity = await Category.create(atlRestaurant2)
        let waffleHouse = await Category.create(atlRestaurant3)
        let hattieB = await Category.create(atlRestaurant4)
        // Events
        let houseInThePark = await Category.create(atlEvent1)
        let trapBrunch = await Category.create(atlEvent2)

        atlanta.categories.push(
            // Landmarks
            piedmontPark, centennialPark, georgiaAquarium,
            // Restaurants
            sluttyVegan, theVarsity, waffleHouse, hattieB,
            //Events
            houseInThePark, trapBrunch
            )
        atlanta.save()
    } catch(err) {
        console.log(err)
    }
}


const atlLandmark1 = {
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark2 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark3 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}


const atlRestaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlEvent1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent3 = {
    name: "",
    location: "",
    hours: "",
    payForEntrance: false,
    category: "events"
}

// NEW YORK CITY

async function createAtlanta() {
    try {
        let atlanta = await City.create({ name: 'Atlanta' })
        // Landmarks
        let piedmontPark = await Category.create(atlLandmark1)
        let centennialPark = await Category.create(atlLandmark2)
        let georgiaAquarium = await Category.create(atlLandmark3)
        // Restaurants
        let sluttyVegan = await Category.create(atlRestaurant1)
        let theVarsity = await Category.create(atlRestaurant2)
        let waffleHouse = await Category.create(atlRestaurant3)
        let hattieB = await Category.create(atlRestaurant4)
        // Events
        let houseInThePark = await Category.create(atlEvent1)
        let trapBrunch = await Category.create(atlEvent2)

        atlanta.categories.push(
            // Landmarks
            piedmontPark, centennialPark, georgiaAquarium,
            // Restaurants
            sluttyVegan, theVarsity, waffleHouse, hattieB,
            //Events
            houseInThePark, trapBrunch
            )
        atlanta.save()
    } catch(err) {
        console.log(err)
    }
}



const atlLandmark1 = {
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark2 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark3 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}


const atlRestaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlEvent1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent3 = {
    name: "",
    location: "",
    hours: "",
    payForEntrance: false,
    category: "events"
}


// TAMPA

async function createAtlanta() {
    try {
        let atlanta = await City.create({ name: 'Atlanta' })
        // Landmarks
        let piedmontPark = await Category.create(atlLandmark1)
        let centennialPark = await Category.create(atlLandmark2)
        let georgiaAquarium = await Category.create(atlLandmark3)
        // Restaurants
        let sluttyVegan = await Category.create(atlRestaurant1)
        let theVarsity = await Category.create(atlRestaurant2)
        let waffleHouse = await Category.create(atlRestaurant3)
        let hattieB = await Category.create(atlRestaurant4)
        // Events
        let houseInThePark = await Category.create(atlEvent1)
        let trapBrunch = await Category.create(atlEvent2)

        atlanta.categories.push(
            // Landmarks
            piedmontPark, centennialPark, georgiaAquarium,
            // Restaurants
            sluttyVegan, theVarsity, waffleHouse, hattieB,
            //Events
            houseInThePark, trapBrunch
            )
        atlanta.save()
    } catch(err) {
        console.log(err)
    }
}

const atlLandmark1 = {
    name: "Piedmont Park",
    location: "Midtown",
    hours: "6am to 11pm",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark2 = {
    name: "Centennial Olympic Park",
    location: "Downtown",
    hours: "24hours",
    payForEntrance: false,
    category: 'landmarks',
}

const atlLandmark3 = {
    name: "Georgia Aquarium",
    location: "Downtown",
    hours: "9am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}


const atlRestaurant1 = {
    name: "Slutty Vegan",
    location: "Inman Park",
    hours: "12pm to Midnight",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant2 = {
    name: "The Varsity",
    location: "Midtown",
    hours: "11am to 8pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant3 = {
    name: "Waffle House",
    location: "Corners all over",
    hours: "24 hours",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlRestaurant4 = {
    name: "Hattie B's Hot Chicken",
    location: "Little 5 Points",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const atlEvent1 = {
    name: "House In The Park",
    location: "Piedmont Park",
    hours: "7pm to Midnight from April to October every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent2 = {
    name: "Trap Brunch",
    location: "Flying Biscuit Cafe",
    hours: "10am to 3:30pm every Saturday",
    payForEntrance: false,
    category: 'events',
}

const atlEvent3 = {
    name: "",
    location: "",
    hours: "",
    payForEntrance: false,
    category: "events"
}