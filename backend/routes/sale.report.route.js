const express = require('express');
const router = express.Router();
const {
  getAllSales,
  createSale,
  updateSale,
  deleteSale,
} = require('../controllers/sale.report.controller');

router.get('/', getAllSales);
router.post('/', createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

module.exports = router;
