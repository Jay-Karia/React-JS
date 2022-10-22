const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

const PORT = process.env.PORT || 8000

router.get('/', (req, res) => {
    res.send('Hello from the back')
})

// Connecting to database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Database connected successfully')
    }
})

// Listening
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))