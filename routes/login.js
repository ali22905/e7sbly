const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.get('/login', (req, res) => {
  User.find()
  .then(result => {
    let user_names = [];
    for (let i = 0; i < result.length; i++) {
      user_names.push(result[i].user_name)
    }
    res.render('login', {title: "e7sbly - login", user_names: user_names})
  })
})




module.exports = router

