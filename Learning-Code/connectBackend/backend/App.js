const express = require('express')
const app = express()
const routes = require('./Routes/routes')

const cors = require('cors')

const connectDB = require('./db/connectDB')

const port = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.use('/api', routes)
app.use(cors())

// Listening
app.listen(port, () => console.log(`App listening on port ${port}`))