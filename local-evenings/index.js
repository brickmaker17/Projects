const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('Connected to port 8080')
})