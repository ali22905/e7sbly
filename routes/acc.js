const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');



router.post('/acc/:user_name', (req, res) => {
  User.findOneAndUpdate(
    {user_name: req.params.user_name},
    {
      chosen_game: req.body.chosen_game,
      start_time: req.body.start_time,
      chosen_game_price: req.body.chosen_game_price,
      client_name: req.body.client_name
    },
    {new: true},
    (err, data) => {
      if (err) {
        console.log(`myError from post req /acc/:user_name  :  ${err}`);
      }else {
        res.redirect(`/home/${req.params.user_name}`)
      }
    }
  )
})



router.put('/acc/:id', (req, res) => {


  User.findOneAndUpdate(
    {_id: req.params.id},
    {
      chosen_game: req.body.chosen_game,
      start_time: req.body.start_time,
      chosen_game_price: req.body.chosen_game_price,
      client_name: req.body.client_name
    },
    {new: true},
    (err, data) => {
      if (err) {
        console.log(`myError from acc.js route put requset /acc/:id  ==>  ${err}`);
      }else {
        res.json(data);
      }
    }
  )


})



module.exports = router

