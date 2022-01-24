// Import
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = 8000
const Comment = require('./models/Comments.js')

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
    Comment.find({}, (err, foundComment) => {
        res.render('comments.ejs', {
            comment: foundComment
        })
    })
})

// new
app.get('/comments/new', (req,res)=>{
    res.render('commentsNew.ejs')
})

// edit
app.get('/comments/:id/edit', (req,res)=>{
    // res.send('Edit Comment')
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('commentsEdit.ejs', {
            comment: foundComment,
            id: req.params.id
        })
    })
})

// show
app.get('/comments/:id', (req,res)=>{
    // res.send('Comments show page')
    const id = req.params.id
    Comment.findById(id, (err, foundComment) => {
        res.render('commentsShow.ejs', {
            comment: foundComment
        })
    })
})



// create
app.post('/comments', (req,res)=>{
    if (req.body.beenHereBefore === "on"){
        req.body.beenHereBefore = true
    } else {
        req.body.beenHereBefore = false
    }
    Comment.create(req.body, (err, createdComment) => {
        if(err) {
            console.log(err)
            res.send(err)
        }else {
            console.log(createdComment)
            res.redirect('/comments')
        }
        // res.redirect('/comments')
    })
})

// update
app.put('/comments/:id', (req,res)=>{
    if (req.body.beenHereBefore === "on"){
        req.body.beenHereBefore = true
    } else {
        req.body.beenHereBefore = false
    }
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment) => {
        res.redirect('/comments/' + req.params.id)
    })
})

app.delete('/comments/:id', (req, res)=> {
    const deleteComment = (err, deleteMsg) => {
        if(err) {
            return res.send(err)
        }
        console.log(deleteMsg)
        res.redirect('/comments')
    }
    Comment.deleteOne({_id : req.params.id},deleteComment)
})


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is live on port ${PORT}`)
})
