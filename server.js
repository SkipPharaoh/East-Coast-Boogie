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
    // res.send('Main Cities page')
    res.render('cities.ejs')
})

app.get('/atl', (req,res)=>{
    // res.send('Main home page')
    res.render('atl.ejs')
})
app.get('/tampa', (req,res)=>{
    // res.send('Main home page')
    res.render('tpa.ejs')
})
app.get('/nyc', (req,res)=>{
    // res.send('Main home page')
    res.render('nyc.ejs')
})
app.get('/detroit', (req,res)=>{
    // res.send('Main home page')
    res.render('detroit.ejs')
})

// Comments Routes
// index
app.get('/comments', (req,res)=>{
    res.render('comments.ejs')
})

// new
app.get('/comments/new', (req,res)=>{
    res.render('commentsNew.ejs')
})

// edit
app.get('/comments/:id/edit', (req,res)=>{
    res.send('Edit Comment')
})

// show
app.get('/comments/:id', (req,res)=>{
    // res.send('Comments show page')
    res.render('commentsShow.ejs')
})

// create
app.post('/comments', (req,res)=>{
    res.redirect('/comments')
})

// update
app.put('/comment/:id', (req,res)=>{
    res.redirect('/comments/:id')
})

// delete
app.delete('/comments/:id', (req,res)=>{
    res.redirect('/comments')
})


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is live on port ${PORT}`)
})