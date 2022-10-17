const express = require('express')
const router = express.Router()

const User = require('../Models/user')

router.post('/createUser', (req, res) => {
    const users = new User({
        "Name": "Jay Sanjay Karia",
        "Email": "jay.sanjay.karia@gmail.com",
        "Password": "09Jan197#"
    })
    users.save()
    res.send('New user created')
})

module.exports = router