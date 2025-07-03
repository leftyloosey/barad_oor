// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const strangSchema = new mongoose.Schema({
  content: {
    type: String,
  },
})

const Strang = mongoose.model('Strang', strangSchema)

module.exports = {
  strangSchema,
  Strang,
}
