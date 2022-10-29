const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user');

const dotenv = require('dotenv')
dotenv.config()

// Register a new user
router.post('/register', async(req, res) => {
    const user = req.body
    const takenName = await User.find({ name: user.name })
    const takenEmail = await User.find({ email: user.email })

    if (takenEmail.length !== 0 || takenName.length !== 0) {
        res.status(400).json({ msg: "Username or email has already been taken", status: "error" })
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)
        const dbUser = new User({
            name: user.name.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })
        dbUser.save()
        res.status(200).json({ msg: "Success", status: "ok" })
    }
})

// Verification of JWT
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'].split(' ')[1]
    if (token) {
        jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
            if (err) return res.json({
                isLoggedIn: false,
                msg: 'Failed to Authenticate'
            })
            req.user = {}
            req.user.id = decoded.is
            req.user.name = decoded.name
            next()
        })
    } else {
        res.status(400).json({
            msg: 'Incorrect Token given',
            status: "error"
        })
    }
}

// Login
router.post('/login', async(req, res) => {
    const userLoggingIn = req.body
    User.findOne({
        email: userLoggingIn.email.toLowerCase()
    }).then((dbUser) => {
        // checks whether a user exists in db with matching email
        if (dbUser) {
            bcrypt.compare(userLoggingIn.password, dbUser.password).then((isCorrect) => {
                if (!isCorrect) {
                    // checks whether the entered password matches the password in db
                    return res.status(400).json({ msg: 'Invalid password or email', status: "error" })
                }
                // continues if the password matches
                const payload = {
                    id: dbUser._id,
                    name: dbUser.name
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET, { expiresIn: 86400 }, // in 1 day
                    (err, token) => {
                        if (err) return res.status(400).json({ msg: err, status: "error" })
                        return res.json({
                            msg: 'Success',
                            token: 'Bearer ' + token
                        })
                    }

                )
            })
        } else {
            return res.status(400).json({ msg: 'Invalid password or email', status: "error" })
        }
    })
})

// Now the user is logged in
router.get('/getUser', verifyJWT, (req, res) => {
    res.json({
        isLoggedIn: true,
        name: req.user.name
    })
})

module.exports = router