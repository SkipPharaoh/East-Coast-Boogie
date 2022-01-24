const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const City = require('../models/City')

// ATL Index route
router.get('/atl', (req,res)=>{
    res.send('ATL Home page')
})