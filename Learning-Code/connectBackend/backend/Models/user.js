const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    "name": String,
    "email": {
        type: String,
        unique: true
    },
    "password": String
})

const user = mongoose.model('user', UserSchema);
user.syncIndexes()

module.exports = user