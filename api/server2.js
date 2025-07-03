import { ApolloServer } from '@apollo/server'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: '../.env' })
import connectDB from './config/db.js'
import typeDefs from './schema/typeDefs.js'
import resolvers from './resolvers/resolvers.js'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
// import { fileURLToPath } from 'url'

import cors from 'cors'
import http from 'http'
// import { log } from 'console'

import { ruruHTML } from 'ruru/server'

const port = process.env.PORT || 5002

connectDB()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const app = express()

const httpServer = http.createServer(app)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})
await server.start()

// app.use(express.static(path.join(__dirname, '../client/build')))
app.get('/', (req, res) => {
  // app.get('/*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  res.json({ message: 'inky blinky', status: 'success' })
  //   res.type('html')
  res.type('application/json')
  res.end(ruruHTML({ endpoint: '/graphql' }))
})
app.get('/graphql', (req, res) => {
  // app.get('/*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  //   res.json({ message: 'inky blinky', status: 'success' })
  res.type('html')
  //   res.type('application/json')
  res.end(ruruHTML({ endpoint: '/graphql' }))
})
app.use(
  '/',
  cors(),
  express.json({ limit: '50mb' }),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
)

await new Promise((resolve) => httpServer.listen({ port: port }, resolve))
console.log(`🚀 Server ready at http://localhost:${port}`)
