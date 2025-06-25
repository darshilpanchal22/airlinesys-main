const express = require('express');
const router = express.Router();
const { booking } = require('../controllers/bookingController');

router.post('', booking);

module.exports = router;
