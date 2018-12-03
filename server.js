const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require("./routes/api/items");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// CORS access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Use routes
app.use('/api/items', items);

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
  .then(() => console.log("Mongo db is connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));
