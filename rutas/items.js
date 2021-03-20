const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.busquedaController);

router.get('/:id', itemsController.detallesController);

module.exports = router;