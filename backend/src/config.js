const express = require('express')          // Express to create the api request
const helmet = require('helmet')            // Secure Express API
const cors = require("cors")                // Install Cors at Express
const morgan = require("morgan")            // HTTP logger
const compression = require("compression")  // Make requests lighter and load faster
const bodyParser = require('body-parser')   // Body Parser
const app = express()

app.use(morgan("common"))
app.use(helmet())
app.use(cors({
    origin: ["http://localhost"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(compression())
app.use(bodyParser.json())

module.exports = app;