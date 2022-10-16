const mongoose = require('mongoose')

function connect() {
    const db_uri = 'mongodb+srv://Jay:<jskAuthTest>@cluster0.s0b7o1p.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(db_uri)
    console.log('DB connected');
}

module.exports = connect