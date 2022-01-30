// Import
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = process.env.PORT || 8000
const citiesController = require('./controllers/cities')

// Mongoose Config
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eastCoastBoogie'
mongoose.connect(MONGODB_URI, ()=>{console.log('Mongoose connected at: ' + MONGODB_URI)})

// App Config
app.set('view engine', 'ejs')

// App Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

// Controller
app.use(citiesController)

// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is live on port ${PORT}`)
})