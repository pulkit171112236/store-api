const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('---DB connected---')
    })
    .catch((err) => {
      console.log('---error-connecting-db---\n', err)
    })
}

module.exports = connectDB
