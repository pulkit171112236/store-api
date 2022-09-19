require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

//file imports
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')

// import routes
const notFound = require('./middleware/not-found')
const { connect } = require('mongoose')

// define variables
const app = express()

// middlewares
app.use(bodyParser.json())

// define routes
app.get('/', (req, res, next) => {
  return res.send('<h1>starting server for store-api</h1>')
})

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'

// starting server
;(async () => {
  await connectDB(MONGODB_URI)
  app.listen(PORT, HOST, () => {
    console.log(`---app-listening-at-port-${PORT}---`)
  })
})()
