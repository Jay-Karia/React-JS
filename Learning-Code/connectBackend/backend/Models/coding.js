const mongoose = require('mongoose');

const RatesSchema = mongoose.Schema({
    "Name": String,
    "Email": String
})

module.exports = mongoose.model('coding', RatesSchema);