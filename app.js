const express = require('express');
const app = express();
const connectDB = require('./db/connect')
port = 5000
const tasks = require('./routes/tasks');

app.use(express.json())


app.get('/hello' ,(req, res, next) => {
  res.send("Task Manager App")
})

app.use('/tasks',tasks)

const start = async () => {
  try {
    await connectDB();
    app.listen(port,console.log(`Listening on port ${port}`))
  }
  catch (err) {}
}

