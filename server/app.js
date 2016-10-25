const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const applyRoutes = require('./routes');

// Express middleware to populate 'req.body' so we can access POST variables
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
  type: 'application/vnd.api+json',
}));

// parse application/x-www-tf-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Enable simulation of HTTP methods other than GET and POST ie simulate DELETE, PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ==================================================
// instantiate routes
applyRoutes(app);

module.exports = app;


