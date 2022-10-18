const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

var bcrpytjs = require('bcryptjs')

const User = require('../Models/user')

router.get('/createUser', body('Name').isLength({ min: 3 }), body('Email').isEmail(), (req, res) => {
    let salt = ''
    let secPass = ''
    async function genSecPass() {
        globalThis.secPass
        salt = await bcrpytjs.genSalt(10)
        secPass = await bcrpytjs.hash("09Jan197#", salt)
        return secPass
    }
    genSecPass().then((hash) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array())
        }
        const users = new User({
            Name: "jays",
            Email: "jay.sanjay.karia@gmail.com",
            Password: hash
        })
        users.save()
        res.send('New user created')
    }).catch((err) => {
        console.log(err)
        res.send('Could not create user')
    })
})

module.exports = router