import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

// Import local files
import routes from './routes/index.js'
import config from './config/config.js'

// Create an instance of Express
const app = express()

// Apply Morgan middleware for logging HTTP requests
app.use(morgan('tiny'))

// Apply body-parser middleware to parse request bodies as JSON
app.use(bodyParser.json())

// Import and apply routing middleware from another file
app.use(routes)

// Start the server
const server = app.listen(config.server.port, () => {
  console.log(`SERVER RUNNING ON PORT ${server.address().port}`)
})
