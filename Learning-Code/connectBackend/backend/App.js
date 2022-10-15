//Imports
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./Routes/routes')

const connect = require('./db/connectDB')

const app = express();
const port = 8000;

// Connecting to Database
connect()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', router)

// Listening
app.listen(port, () => console.log(`App listening on port ${port}`))