// Imports
const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const City = require('../models/City')
const Comment = require('../models/comments')
const Category = require('../models/Category')

// Sort Categories Function //
function sortCategories(data){
    let placesToEat = []
    let placesToSee = []
    let thingsToDo = []
    for(let i = 0; i < data.categories.length; i++) {
        if(data.categories[i].category === 'landmarks') {
            placesToSee.push(data.categories[i])
        } else if (data.categories[i].category === 'placesToEat') {
            placesToEat.push(data.categories[i])
        } else {
            thingsToDo.push(data.categories[i])
        }
    }
    return {placesToSee, placesToEat, thingsToDo}
}

    // RESTful Routes //
router.get('/cities', (req,res)=>{
    res.render('cities.ejs')
})

router.get('/atl', (req,res)=>{
    City.findOne({name: 'Atlanta'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    const cityInfo = sortCategories(foundCity)
                    console.log(cityInfo)
                    res.render('atl.ejs',{
                        city: foundCity,
                        restaurants: cityInfo.placesToEat,
                        landmarks: cityInfo.placesToSee,
                        events: cityInfo.thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
router.get('/tampa', (req,res)=>{
    City.findOne({name: 'Tampa'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    const cityInfo = sortCategories(foundCity)
                    res.render('tpa.ejs',{
                        city: foundCity,
                        restaurants: cityInfo.placesToEat,
                        landmarks: cityInfo.placesToSee,
                        events: cityInfo.thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
router.get('/nyc', (req,res)=>{
    City.findOne({name: 'New York'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    const cityInfo = sortCategories(foundCity)
                    res.render('nyc.ejs',{
                        city: foundCity,
                        restaurants: cityInfo.placesToEat,
                        landmarks: cityInfo.placesToSee,
                        events: cityInfo.thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})
router.get('/nyc/comments', (req,res)=>{
    Comment.find({city: 'New York'}, (err, foundComment) => {
        console.log('My City Comments: ', foundComment)
        res.render('nycComments.ejs', {
            comment: foundComment
        })
    })
})
router.get('/detroit', (req,res)=>{
    City.findOne({name: 'Detroit'}).populate('categories').exec(
        (err, foundCity) => {
            Comment.find({city: foundCity.name}).then((comments)=>{
                console.log('ALL COMMENTS: ', comments)
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    const cityInfo = sortCategories(foundCity)
                    res.render('detroit.ejs',{
                        city: foundCity,
                        restaurants: cityInfo.placesToEat,
                        landmarks: cityInfo.placesToSee,
                        events: cityInfo.thingsToDo,
                        comments: comments
                    })
                }
            })
        }
    )
})

    // Comments Routes //
// index
router.get('/comments', (req,res)=>{
    Comment.find({}, (err, foundComment) => {
        res.render('comments.ejs', {
            comment: foundComment
        })
    })
})

// new
router.get('/comments/new', (req,res)=>{
    res.render('commentsNew.ejs')
})

// edit
router.get('/comments/:id/edit', (req,res)=>{
    // res.send('Edit Comment')
    Comment.findById(req.params.id, (err, foundComment) => {
        res.render('commentsEdit.ejs', {
            comment: foundComment,
            id: req.params.id
        })
    })
})

// show
router.get('/comments/:id', (req,res)=>{
    // res.send('Comments show page')
    const id = req.params.id
    Comment.findById(id, (err, foundComment) => {
        res.render('commentsShow.ejs', {
            comment: foundComment
        })
    })
})

router.get('/*', (req,res)=>{
    // res.send('Main Cities page')
    res.render('cities.ejs')
})

// create
router.post('/comments', (req,res)=>{
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
            console.log(req.body)
            if (req.body.city === 'New York') {
                res.redirect('/nyc')
            } else if( req.body.city === 'Atlanta') {
                res.redirect('/atl')
            } else if (req.body.city === 'Tampa') {
                res.redirect('/tampa')
            } else if (req.body.city === 'Detroit') {
                res.redirect('/detroit')
            }else {
                res.redirect('/comments')
            }
        }
    })
})

// update
router.put('/comments/:id', (req,res)=>{
    if (req.body.beenHereBefore === "on"){
        req.body.beenHereBefore = true
    } else {
        req.body.beenHereBefore = false
    }
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment) => {
        if (req.body.city === 'New York') {
            res.redirect('/nyc')
        } else if( req.body.city === 'Atlanta') {
            res.redirect('/atl')
        } else if (req.body.city === 'Tampa') {
            res.redirect('/tampa')
        } else if (req.body.city === 'Detroit') {
            res.redirect('/detroit')
        }else {
            res.redirect('/comments')
        }
    })
})

// delete
router.delete('/comments/:id', (req, res)=> {
    const deleteComment = (err, deleteMsg) => {
        if(err) {
            return res.send(err)
        }
        console.log(deleteMsg)
        res.redirect('/cities')
    }
    Comment.deleteOne({_id : req.params.id},deleteComment)
})

module.exports = router