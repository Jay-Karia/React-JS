const express = require('express')
const router = express.Router();

const Student = require('../Models/coding')

router.get('/coding', (req, res) => {
    res.send('Hello from backend')
})

module.exports = router;