// Import
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const PORT = 8000
const Comment = require('./models/Comments.js')
const atlController = require('./controllers/atl')




// Mongoose Config
const mongoose = require('mongoose')
const City = require('./models/City.js')
const Category = require('./models/Category.js')
const URI = 'mongodb://127.0.0.1:27017/eastCoastBoogie'
mongoose.connect(URI, ()=>{console.log('Mongoose connected at: ' +URI)})

// App Config
app.set('view engine', 'ejs')

// App Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

// Sort Categories Function //
// function sortCategories(){
//     let placesToEat = []
//     let placesToSee = []
//     let thingsToDo = []
//     for(let i = 0; i < foundCity.categories.length; i++) {
//         if(foundCity.categories[i].category === 'landmarks') {
//             placesToSee.push(foundCity.categories[i])
//         } else if (foundCity.categories[i].category === 'placesToEat') {
//             placesToEat.push(foundCity.categories[i])
//         } else {
//             thingsToDo.push(foundCity.categories[i])
//         }
//     }
// }

    // RESTful Routes //
app.get('/cities', (req,res)=>{
    // res.send('Main Cities page')
    res.render('cities.ejs')
})

app.get('/atl', (req,res)=>{
    // res.send('Main home page')
    City.findOne({name: 'Atlanta'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    // console.log(foundCity)
                    let placesToEat = []
                    let placesToSee = []
                    let thingsToDo = []
                    for(let i = 0; i < foundCity.categories.length; i++) {
                        if(foundCity.categories[i].category === 'landmarks') {
                            placesToSee.push(foundCity.categories[i])
                        } else if (foundCity.categories[i].category === 'placesToEat') {
                            placesToEat.push(foundCity.categories[i])
                        } else {
                            thingsToDo.push(foundCity.categories[i])
                        }
                    }
                    res.render('atl.ejs',{
                        city: foundCity,
                        restaurants: placesToEat,
                        landmarks: placesToSee,
                        events: thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
app.get('/tampa', (req,res)=>{
    City.findOne({name: 'Tampa'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    // console.log(foundCity)
                    let placesToEat = []
                    let placesToSee = []
                    let thingsToDo = []
                    for(let i = 0; i < foundCity.categories.length; i++) {
                        if(foundCity.categories[i].category === 'landmarks') {
                            placesToSee.push(foundCity.categories[i])
                        } else if (foundCity.categories[i].category === 'placesToEat') {
                            placesToEat.push(foundCity.categories[i])
                        } else {
                            thingsToDo.push(foundCity.categories[i])
                        }
                    }
                    res.render('tpa.ejs',{
                        city: foundCity,
                        restaurants: placesToEat,
                        landmarks: placesToSee,
                        events: thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
app.get('/nyc', (req,res)=>{
    // res.send('Main home page')
    City.findOne({name: 'New York'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    // console.log(foundCity)
                    let placesToEat = []
                    let placesToSee = []
                    let thingsToDo = []
                    for(let i = 0; i < foundCity.categories.length; i++) {
                        if(foundCity.categories[i].category === 'landmarks') {
                            placesToSee.push(foundCity.categories[i])
                        } else if (foundCity.categories[i].category === 'placesToEat') {
                            placesToEat.push(foundCity.categories[i])
                        } else {
                            thingsToDo.push(foundCity.categories[i])
                        }
                    }
                    // console.log(placesToEat)
                    // console.log(placesToSee)
                    // console.log(thingsToDo)
                    res.render('nyc.ejs',{
                        city: foundCity,
                        restaurants: placesToEat,
                        landmarks: placesToSee,
                        events: thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
app.get('/detroit', (req,res)=>{
    // res.send('Main home page')
    City.findOne({name: 'Detroit'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    // console.log(foundCity)
                    let placesToEat = []
                    let placesToSee = []
                    let thingsToDo = []
                    for(let i = 0; i < foundCity.categories.length; i++) {
                        if(foundCity.categories[i].category === 'landmarks') {
                            placesToSee.push(foundCity.categories[i])
                        } else if (foundCity.categories[i].category === 'placesToEat') {
                            placesToEat.push(foundCity.categories[i])
                        } else {
                            thingsToDo.push(foundCity.categories[i])
                        }
                    }
                    res.render('detroit.ejs',{
                        city: foundCity,
                        restaurants: placesToEat,
                        landmarks: placesToSee,
                        events: thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
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