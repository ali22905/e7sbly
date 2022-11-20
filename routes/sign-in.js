const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');


router.get('/sign-in', (req, res) => {
  User.find()
  .then(result => {
    let user_names = [];
    for (let i = 0; i < result.length; i++) {
      user_names.push(result[i].user_name)
    }
    let passwords = [];
    for (let i = 0; i < result.length; i++) {
      passwords.push(result[i].pass)
    }
    res.render('sign-in', {
      title: 'e7sbly - sign-in', 
      all_users: result, 
      user_names: user_names,
      passwords: passwords
    })
  })
  .catch(err => {console.log(`error from sign-in router : ${err}`);})
})




module.exports = router

