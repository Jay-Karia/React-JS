const mongoose = require('mongoose');

const CodingSchema = mongoose.Schema({
    "Name": String,
    "Language": String
})

module.exports = mongoose.model('coding', CodingSchema);