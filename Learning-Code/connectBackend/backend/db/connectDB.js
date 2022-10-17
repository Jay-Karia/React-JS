const mongoose = require('mongoose')

function connect() {
    const db_uri = 'mongodb+srv://Jay:09Jan1973@cluster0.vpjxkmo.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(db_uri)
    console.log('DB connected');
}

module.exports = connect