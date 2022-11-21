const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');






router.get('/contact', (req, res) => {
    res.render('contact', {title: "e7sbly - contact"})
})











module.exports = router