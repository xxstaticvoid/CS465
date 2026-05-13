const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

//get travel page
router.get('/', controller.travel);

module.exports = router;
