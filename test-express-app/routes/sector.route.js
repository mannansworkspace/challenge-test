
const express = require('express');
const router = express.Router();
const { sectorController } = require('../controllers/index.controller')

router.get('/', sectorController.getAllSectors);

module.exports = router;
