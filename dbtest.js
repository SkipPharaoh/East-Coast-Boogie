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
        // await createAtlanta()
        await createNYC()
        await createTampa()
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


// // DETROIT

// async function createAtlanta() {
//     try {
//         let atlanta = await City.create({ name: 'Atlanta' })
//         // Landmarks
//         let piedmontPark = await Category.create(atlLandmark1)
//         let centennialPark = await Category.create(atlLandmark2)
//         let georgiaAquarium = await Category.create(atlLandmark3)
//         // Restaurants
//         let sluttyVegan = await Category.create(atlRestaurant1)
//         let theVarsity = await Category.create(atlRestaurant2)
//         let waffleHouse = await Category.create(atlRestaurant3)
//         let hattieB = await Category.create(atlRestaurant4)
//         // Events
//         let houseInThePark = await Category.create(atlEvent1)
//         let trapBrunch = await Category.create(atlEvent2)

//         atlanta.categories.push(
//             // Landmarks
//             piedmontPark, centennialPark, georgiaAquarium,
//             // Restaurants
//             sluttyVegan, theVarsity, waffleHouse, hattieB,
//             //Events
//             houseInThePark, trapBrunch
//             )
//         atlanta.save()
//     } catch(err) {
//         console.log(err)
//     }
// }


// const atlLandmark1 = {
//     name: "Piedmont Park",
//     location: "Midtown",
//     hours: "6am to 11pm",
//     payForEntrance: false,
//     category: 'landmarks',
// }

// const atlLandmark2 = {
//     name: "Centennial Olympic Park",
//     location: "Downtown",
//     hours: "24hours",
//     payForEntrance: false,
//     category: 'landmarks',
// }

// const atlLandmark3 = {
//     name: "Georgia Aquarium",
//     location: "Downtown",
//     hours: "9am to 6pm",
//     payForEntrance: true,
//     category: 'landmarks',
// }


// const atlRestaurant1 = {
//     name: "Slutty Vegan",
//     location: "Inman Park",
//     hours: "12pm to Midnight",
//     payForEntrance: false,
//     category: 'placesToEat',
// }

// const atlRestaurant2 = {
//     name: "The Varsity",
//     location: "Midtown",
//     hours: "11am to 8pm",
//     payForEntrance: false,
//     category: 'placesToEat',
// }

// const atlRestaurant3 = {
//     name: "Waffle House",
//     location: "Corners all over",
//     hours: "24 hours",
//     payForEntrance: false,
//     category: 'placesToEat',
// }

// const atlRestaurant4 = {
//     name: "Hattie B's Hot Chicken",
//     location: "Little 5 Points",
//     hours: "11am to 10pm",
//     payForEntrance: false,
//     category: 'placesToEat',
// }

// const atlEvent1 = {
//     name: "House In The Park",
//     location: "Piedmont Park",
//     hours: "7pm to Midnight from April to October every Saturday",
//     payForEntrance: false,
//     category: 'events',
// }

// const atlEvent2 = {
//     name: "Trap Brunch",
//     location: "Flying Biscuit Cafe",
//     hours: "10am to 3:30pm every Saturday",
//     payForEntrance: false,
//     category: 'events',
// }

// const atlEvent3 = {
//     name: "",
//     location: "",
//     hours: "",
//     payForEntrance: false,
//     category: "events"
// }

// NEW YORK CITY

async function createNYC() {
    try {
        let nyc = await City.create({ name: 'New York' })
        // Landmarks
        let empireState = await Category.create(nycLandmark1)
        let brooklynMuseum = await Category.create(nycLandmark2)
        let liberty = await Category.create(nycLandmark3)
        // Restaurants
        let nusret = await Category.create(nycRestaurant1)
        let genesis = await Category.create(nycRestaurant2)
        let saga = await Category.create(nycRestaurant3)
        let mottStreet = await Category.create(nycRestaurant4)
        // Events
        let broadwayTheatre = await Category.create(nycEvent1)
        let rockefeller = await Category.create(nycEvent2)
        let countdown = await Category.create(nycEvent3)

        nyc.categories.push(
            // Landmarks
            empireState, brooklynMuseum, liberty,
            // Restaurants
            nusret, genesis, saga, mottStreet,
            //Events
            broadwayTheatre, rockefeller, countdown
            )
        nyc.save()
    } catch(err) {
        console.log(err)
    }
}



const nycLandmark1 = {
    name: "Empire State Building",
    location: "Midtown East",
    hours: "10am to 10pm",
    payForEntrance: true,
    category: 'landmarks',
}

const nycLandmark2 = {
    name: "Brooklyn Museum",
    location: "Prospect Heights",
    hours: "11am to 6pm",
    payForEntrance: true,
    category: 'landmarks',
}

const nycLandmark3 = {
    name: "Statue of Liberty",
    location: "Liberty Island",
    hours: "8:30am to 4pm",
    payForEntrance: true,
    category: 'landmarks',
}


const nycRestaurant1 = {
    name: "Nusr-Et Steakhouse",
    location: "Midtown West",
    hours: "12pm to 12am",
    payForEntrance: false,
    category: 'placesToEat',
}

const nycRestaurant2 = {
    name: "Onjium at Genesis House",
    location: "Meatpacking District",
    hours: "11am to 10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const nycRestaurant3 = {
    name: "Saga",
    location: "Financial District",
    hours: "5:30pm to 9pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const nycRestaurant4 = {
    name: "Mott Street Eatery Food Court",
    location: "Chinatown",
    hours: "7:30am to 9pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const nycEvent1 = {
    name: "Broadway Theatre",
    location: "Midtown",
    hours: "Depends on the show",
    payForEntrance: true,
    category: 'events',
}

const nycEvent2 = {
    name: "Rockefeller Center Christmas Tree",
    location: "Midtown",
    hours: "6am to Midnight",
    payForEntrance: true,
    category: 'events',
}

const nycEvent3 = {
    name: "Times Square Countdown",
    location: "Times Square",
    hours: "Starts @ 3pm",
    payForEntrance: true,
    category: "events"
}


// TAMPA

async function createTampa() {
    try {
        let tampa = await City.create({ name: 'Tampa' })
        // Landmarks
        let buschGardens = await Category.create(tpaLandmark1)
        let tampaMuseumOfArt = await Category.create(tpaLandmark2)
        let floridaAquarium = await Category.create(tpaLandmark3)
        // Restaurants
        let berns = await Category.create(tpaRestaurant1)
        let ciros = await Category.create(tpaRestaurant2)
        let columbiaRestaurant = await Category.create(tpaRestaurant3)
        // Events
        let gasparilla = await Category.create(tpaEvent1)
        let liveAndLocal = await Category.create(tpaEvent2)
        let yogaOnTheLawn = await Category.create(tpaEvent3)

        tampa.categories.push(
            // Landmarks
            buschGardens, tampaMuseumOfArt, floridaAquarium,
            // Restaurants
            berns, ciros, columbiaRestaurant,
            //Events
            gasparilla, liveAndLocal, yogaOnTheLawn
            )
        tampa.save()
    } catch(err) {
        console.log(err)
    }
}

const tpaLandmark1 = {
    name: "Busch Gardens",
    location: "Temple Terrace",
    hours: "10am to 8pm",
    payForEntrance: true,
    category: 'landmarks',
}

const tpaLandmark2 = {
    name: "Tampa Museum of Art",
    location: "Downtown",
    hours: "10am-5pm",
    payForEntrance: true,
    category: 'landmarks',
}

const tpaLandmark3 = {
    name: "Florida Aquarium",
    location: "Channelside",
    hours: "9:30am to 5:30pm",
    payForEntrance: true,
    category: 'landmarks',
}


const tpaRestaurant1 = {
    name: "Bern's Steak House",
    location: "Hyde Park",
    hours: "5pm-10pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const tpaRestaurant2 = {
    name: "Ciro's Tampa",
    location: "Hyde Park",
    hours: "5pm-3am",
    payForEntrance: false,
    category: 'placesToEat',
}

const tpaRestaurant3 = {
    name: "Columbia Restaurant",
    location: "Ybor",
    hours: "11am-9pm",
    payForEntrance: false,
    category: 'placesToEat',
}

const tpaEvent1 = {
    name: "Gasparilla",
    location: "Tampa",
    hours: "the last weekend in January",
    payForEntrance: false,
    category: 'events',
}

const tpaEvent2 = {
    name: "Live & Local",
    location: "Riverwalk Stage",
    hours: "First weekend of every month",
    payForEntrance: false,
    category: 'events',
}

const tpaEvent3 = {
    name: "Yoga on the Lawn",
    location: "Armature Works",
    hours: "9:30am-10:30am the 2nd & 4th sunday of the month",
    payForEntrance: false,
    category: "events"
}