const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const issuesRoutes = require('./routes/issues');
const commentsRoutes = require('./routes/comments');

const app = express();
const config = require('./config');

let issue = require('./model/issues');

app.use(bodyParser.json());
app.use('/issues', issuesRoutes);
app.use('comments', commentsRoutes);

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('Connected to Mongo');
})


app.listen(config.port, () => {
    console.log(`listening on ${config.port}`);
})
