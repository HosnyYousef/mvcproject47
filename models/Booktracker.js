const mongoose = require('mongoose')

const BooktrackerSchema = new mongoose.Schema({
  booktracker: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Booktracker', BooktrackerSchema)

localStorage.setItem('score')
