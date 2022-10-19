const express = require('express')
const router = express.Router()

const User = require('../Models/user')

router.get('/', (req, res) => {
    res.send('Hello from back')
})

router.post('/register', async(req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)
            // user.save()
        res.send(user)
    } catch {}
})

module.exports = router