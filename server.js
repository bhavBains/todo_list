const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));
