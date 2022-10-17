const mongoose = require('mongoose')

const CodingSchema = mongoose.Schema({
    "Name": String,
    "Email": String,
    "Password": String
})

const user = mongoose.model('coding', CodingSchema);
user.createIndexes()

module.exports = mongoose.model('coding', CodingSchema);