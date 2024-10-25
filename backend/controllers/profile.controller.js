// controllers/profile.controller.js
const User = require('../models/User');

// Get User Profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // Extract user ID from the JWT payload
        const user = await User.findById(userId).select('-password'); // Exclude password from the result

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user); // Send the user data as response
    } catch (err) {
        console.error('Error fetching user profile:', err.message);
        res.status(500).send('Server error');
    }
};





// Update User Profile
const updateUserProfile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body, { // Change here
            new: true,
            runValidators: true,
        }).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { getUserProfile, updateUserProfile };
