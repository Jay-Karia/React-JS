const express = require('express')
const App = express()
const routes = require('./Routes/routes')
const auth = require('./Routes/auth')

const connectDB = require('./db/connectDB')

const port = process.env.PORT || 8000

connectDB()

App.use(express.json())
App.use('/api', routes)
App.use('/api/auth', auth)


// Listening
App.listen(port, () => console.log(`App listening on port ${port}`))