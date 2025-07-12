const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser, getProfile } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Register route with validation
router.post('/register', [
  body('name', 'Name is required').notEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], registerUser);

// Login route with validation
router.post('/login', [
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password is required').exists()
], loginUser);

// Profile route (protected)
router.get('/profile', protect, getProfile);

module.exports = router;