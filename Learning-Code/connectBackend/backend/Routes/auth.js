const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {
        'name': 'Jay',
        'language': 'python'
    }
    res.json(obj)
})

module.exports = router