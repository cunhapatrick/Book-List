const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  dimensions: {
    type: Array,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

bookSchema.plugin(paginate)

module.exports = mongoose.model('Book', bookSchema)
