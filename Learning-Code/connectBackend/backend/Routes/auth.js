const express = require('express')
const router = express.Router()

const Code = require('../Models/coding')

router.get('/', (req, res) => {
    const codes = new Code({
        "Name": "Jay Sanjay Karia",
        "Language": "Java"
    })
    codes.save()
    res.send('Hello from auth')
})

module.exports = router