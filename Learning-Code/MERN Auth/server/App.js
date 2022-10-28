const express = require('express')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const routes = require('./Routes/routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connecting to Database
const dbURI = 'mongodb+srv://Jay:09Jan1973@cluster0.vpjxkmo.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected'))

app.use('/', routes)

app.listen(8000, () => {
    console.log('Server started on port 8000')
})