// routes/sales.js
const express = require('express');
const { createSale } = require ('../controllers/salesController.js');

const router = express.Router();

// Route for creating a new sale
router.post('/sales', createSale);

module.exports = router;
