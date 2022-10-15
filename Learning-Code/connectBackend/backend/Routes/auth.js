const express = require('express')
const router = express.Router()

const Codes = require('../Models/coding')

router.get('/', (req, res) => {
    let name = "Jay Karia"
    let lang = "JavaScript"
    const codes = new Codes({
        "Name": name,
        "Language": lang
    })
    codes.save()
    res.send('Hello auth')
})

module.exports = router