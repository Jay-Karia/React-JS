const express = require('express')
const app = express()
const routes = require('./Routes/routes')

const cors = require('cors')

const connectDB = require('./db/connectDB')

const port = process.env.PORT || 8000

connectDB()

app.use(express.json())

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(cors())

app.use('/api', routes)

// Listening
app.listen(port, () => console.log(`App listening on port ${port}`))