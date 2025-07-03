// Main server file, ie index.js
// Imports and initializations
const express = require('express')
const app = express()
require('dotenv').config({ path: '../.env' })
const { connectDB } = require('./config/db')
const cors = require('cors')

connectDB()
// Cors setup to allow requests  in production from the client
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'X-Requested-With',
    ],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
)

// Enabling requests body handling by Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Importing routes and using api prefix for them
app.use('/api', require('./routes/routes.js'))
const port = process.env.PORT || 5002
app.listen(port, () => console.log('🚀 Listening on port: ' + port + ' 🚀'))

// Export the Express API to be available for the serverless function handler
module.exports = app

// And for development only start the server if we're not in a serverless environment
// This will only happen locally in development mode

if (process.env.NODE_ENV !== 'production') {
  console.log('fun habits')
  // Serve static files from the dist directory
  app.use(express.static('dist'))
  // Serve index.html for all other requests
  app.get('/{*splat}', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
  })
  // Start the server
  const port = process.env.PORT || 5002
  app.listen(port, () => console.log('🚀 Listening on port: ' + port + ' 🚀'))
}

// const express = require('express')
// const dotenv = require('dotenv')
// const path = require('path')
// dotenv.config({ path: '../.env' })
// const connectDB = require('connectDB')
// const expressMiddleware = require('@apollo/server/express4')
// const cors = require('cors')
// const http = require('http')
// const port = process.env.PORT || 5002

// connectDB()
// const app = express()

// const httpServer = http.createServer(app)

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// })
// await server.start()

// app.use(express.static(path.join(__dirname, '../client/build')))
// app.get('/', (req, res) => {
//   // app.get('/*', (req, res) => {
//   //   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
//   res.json({ message: 'inky blinky', status: 'success' })
//     res.type('html')
//   //   res.type('application/json')
//     res.end(ruruHTML({ endpoint: '/graphql' }))
// })
// app.get('/graphql', (req, res) => {
//   // app.get('/*', (req, res) => {
//   //   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
//   //   res.json({ message: 'inky blinky', status: 'success' })
//   res.type('html')
//   //   res.type('application/json')
//   res.end(ruruHTML({ endpoint: '/graphql' }))
// })
// app.use(
//   '/',
//   cors(),
//   express.json({ limit: '50mb' }),
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   })
// )

// await new Promise((resolve) => httpServer.listen({ port: port }, resolve))
// console.log(`🚀 Server ready at http://localhost:${port}`)
