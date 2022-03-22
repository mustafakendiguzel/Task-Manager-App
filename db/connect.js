const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://miqky:35710Mustafa-@cluster0.vs4lo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
  })
}
module.exports = connectDB
