var express = require('express')
var router = express.Router()

// Récup du controlleur

var authController = require('../../controllers/auth.controller');

router.get('/login', authController.login)

router.get('/logout', authController.logout)

module.exports = router;
