const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');




router.post('/', (req, res) => {
  User.findOneAndUpdate(
    {user_name: req.body.user_name},
    {game: req.body.game, price: req.body.price},
    {new: true},
    (err, data) => {
      if (err) {
        console.log(`error from the home post req : ${err}`)
      }else {
        res.redirect('/')
      }
    }
  )
})


router.get('/', (req, res) => {
  res.redirect('/home')
})


module.exports = router
