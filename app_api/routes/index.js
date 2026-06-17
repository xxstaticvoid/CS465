
const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

//GET method routes tripsFindByCode (params)
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
