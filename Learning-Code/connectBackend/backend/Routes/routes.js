const express = require('express')
const router = express.Router();

const Codes = require('../Models/coding')

router.get('/coding', (req, res) => {
    res.send('Hello from backend')
})

module.exports = router;