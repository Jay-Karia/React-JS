const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

var bcrpytjs = require('bcryptjs')

const User = require('../Models/user')

router.get('/createUser', [
    body('name', 'Enter a valid name (more than 3 characters)').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password (more than 5 characters)').isLength({ min: 5 })
], (req, res) => {
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
            res.status(400).json({ errors: errors.array() })
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        }).then((user) => { res.json(user) }).catch((err) => {
            console.log(err);
            res.json('Enter a unique value for email')
        })
    })
})

module.exports = router