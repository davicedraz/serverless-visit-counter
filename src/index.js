const cors = require('cors');
const express = require('express');

const routes = require('./routes');
const handleExceptions = require('./infra/middleware/exceptions');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

handleExceptions(app);

module.exports = app;
