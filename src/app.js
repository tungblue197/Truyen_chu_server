
const express = require('express');
const path = require('path');
const token = require('./middlewares/token');
const api = require('./routers/api');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', token.verify, api);


module.exports = app;