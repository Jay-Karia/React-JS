const express = require('express')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const routes = require('./Routes/routes')
require('dotenv').config()

const app = express()

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connecting to Database
const dbURI = process.env.dbURI
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected'))

app.use('/', routes)

app.listen(8000, () => {
    console.log('Server started on port 8000')
})