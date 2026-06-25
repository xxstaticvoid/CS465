
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');


//authenticate our jwt
function authenticateJWT(req, res, next) {
    //console.log('In middleware');

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        console.log('Auth header required, but not present');
        return res.sendStatus(401);
    }

    const parts = authHeader.split(" ");

    if(parts.length !== 2 || parts[0] !== 'Bearer') {
        //not enough tokens in header
        console.log("Something went wrong: " + parts);
        return res.sendStatus(401);
    }
    const token = parts[1];

    //console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err) {
            return res.sendStatus(401).json('Token Validation Error');
        }
        req.auth = verified;
        next();
    });
}


router
    .route("/register")
    .post(authController.register);

router
    .route("/login")
    .post(authController.login);

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip);

//GET method routes tripsFindByCode (params)
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;
