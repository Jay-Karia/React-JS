const mongoose = require('mongoose')

function connect() {
    const db_uri = 'mongodb+srv://Jay:<09Jan1973>@cluster0.zhpmwyx.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    console.log('DB connected');
}

module.exports = connect