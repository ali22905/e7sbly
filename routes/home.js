const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');




router.get('/home', (req, res) => {
  res.render('index', {title: 'e7sbly - Home'})
})


router.post('/home', (req, res) => {
  const user = new User(req.body)
  user
  .save() 
  .then(result => {
    res.redirect(`/home/${req.body.user_name}`)
  })
  .catch((err) => {console.log(err)})
})



router.get('/home/:user_name', (req, res) => {
  User.find({user_name : req.params.user_name})
  .then( result => {
    res.render('acc', {title: `e7sbly - ${result[0].user_name}`, User: result[0]})
  })
})



router.post('/home/:user_name', (req, res) => {
  User.findOneAndUpdate(
    {user_name: req.params.user_name},
    {game: req.body.game, price: req.body.price},
    {new: true},
    (err, data) => {
      if (err) {
        console.log(`error from the home post req : ${err}`)
      }else {
        console.log(data);
        res.redirect(`/home/${req.params.user_name}`)
      }
    }
    )
})




router.put('/home/:user_name', (req, res) => {
  User.findOneAndUpdate(
    {user_name: req.params.user_name}, 
    {game: [], price: []},
    {new: true},
    (err, data) => {
      if (err) {
        console.log(`error from the home post req : ${err}`)
      }else {
        res.json(data)
      }
    }
    )
})




module.exports = router


