// Import
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = 8000

// Mongoose Config
const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1:27017/eastCoastBoogie'
mongoose.connect(URI, ()=>{console.log('Mongoose connected at: ' +URI)})

// App Config
app.set('view engine', 'ejs')

// App Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

    // RESTful Routes //
app.get('/cities', (req,res)=>{
    res.send('Main Cities page')
})
app.get('/', (req,res)=>{
    res.send('Main home page')
})

// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is live on port ${PORT}`)
})