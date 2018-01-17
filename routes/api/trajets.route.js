var express = require('express')
var router = express.Router()

// Récup du controlleur

var trajetsController = require('../../controllers/trajets.controller');


// Map chaque API à la fct controller

router.get('/', trajetsController.getTrajets)

// get('/:id')

router.post('/', trajetsController.createTrajet)

router.put('/', trajetsController.updateTrajet)

router.delete('/:id',trajetsController.removeTrajet)


// Export du router

module.exports = router;