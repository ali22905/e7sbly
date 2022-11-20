const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');








router.get('/help', (req, res) => {
  res.render('help', {title: "e7sbly - help"})
})









module.exports = router