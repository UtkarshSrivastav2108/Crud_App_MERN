const express = require('express');
const route = express.Router()

const services = require('../services/render');


// route.get('/', services.homeRoutes);
route.get('/', services.register);

module.exports = route