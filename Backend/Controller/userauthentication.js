const express = require('express');
const router = express.Router();
const User = require('../Models/User');

exports.getuserauthentication = () => {
  router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed' });
    }
  });
  
  return router;
};
