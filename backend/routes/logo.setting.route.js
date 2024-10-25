const express = require('express');
const router = express.Router();
const Settings = require('../models/logo.setting');

// Get settings
router.get('/', async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/logo', async (req, res) => {
  const { logoUrl, companyName } = req.body;
  const settings = new Settings({ logoUrl, companyName });
  try {
    await settings.save();
    res.status(201).json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update settings
router.put('/', async (req, res) => {
  const { logoUrl, companyName } = req.body;
  try {
    const settings = await Settings.findOneAndUpdate({}, { logoUrl, companyName }, { new: true, upsert: true });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
