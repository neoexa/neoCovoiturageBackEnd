var express = require('express');

var router = express.Router();
var trajets = require('./api/trajets.route');
var auth = require('./api/auth.route');

router.use('/trajets', trajets);
router.use('/auth', auth);

module.exports = router;