const express = require('express')
const router = express.Router()

const User = require('../Models/user')
const { body, validationResult } = require('express-validator')

router.get('/', (req, res) => {
    res.send('Hello from back')
})

router.post('/register', [
    body('name', 'Enter a valid name (more than 3 characters)').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password (more than 5 characters)').isLength({ min: 5 })
], async(req, res) => {
    try {

        // Check for errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        }

        // Create a new user
        const user = await User.create(req.body)
        res.send(user)
    } catch {}
})

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password (more than 5 characters)').isLength({ min: 5 })
], async(req, res) => {
    try {

        // Check for errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        }

        // Check for an existing user
        const user = await User.find({ email: req.body.email, password: req.body.password })
        if (user && user.length != 0) {
            res.send(user)
        } else {
            res.status(400).json({ error: 'Could not find user' })
        }
    } catch {}
})

module.exports = router