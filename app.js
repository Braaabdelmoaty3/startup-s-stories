const express = require('express')
import connectDB from ('./config/db')

const app = express()
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("hello world..!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// connect the database
connectDB()
