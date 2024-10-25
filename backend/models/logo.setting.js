const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  logoUrl: { type: String, required: true },
  companyName: { type: String, required: true },
});

module.exports = mongoose.model('Settings', settingsSchema);
