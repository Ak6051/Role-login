const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profile.controller');
const { authenticate } = require('../middleware/profile.middleware'); // Middleware for token verification
const router = express.Router();

// Route to fetch user profile
router.get('/profile', authenticate, getUserProfile);

// Route to update user profile
router.put('/profile', authenticate, updateUserProfile);

module.exports = router;
