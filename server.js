require('dotenv').config();
const express = require('express')
const app = express()
const port = 8080
// to change the path of things
const path = require('path');
// import schema
const User = require('./models/userSchema');
// helmet for securing 
const helmet = require("helmet");
// to make a post request
app.use(express.urlencoded({ extended: true }));
// to change the defult path of the views directory
app.set('views', path.join(__dirname, './src/views'))
// to act like you are in the views directory
app.set('view engine','ejs');
// to act like we are in the dist folder from the pug file
app.use(express.static('dist'));
// browser only make post and get request so we installed library to help us
const method_override = require('method-override');


// import routes
const home = require('./routes/home')
const acc = require('./routes/acc')
const root = require('./routes/root')
const login = require('./routes/login')
const sign_in = require('./routes/sign-in')
const help_page = require('./routes/help')
const contact = require('./routes/contact')




// connect to mongo data base
const mongoose = require('mongoose');
 
mongoose.connect(process.env.DB_LINK)
  .then( result => {
    app.listen(process.env.PORT  || port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })
  .catch( err => {
    console.log(`error from listening : ${err}`);
  }); 
// connected to mongoDB





// for auto refresh 
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
// const connectLivereload = require("connect-livereload");
// const { send, render } = require('express/lib/response');
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// }); 
// end auto refresh








app.use(method_override('_method'))
app.use(express.json())
app.use(helmet()); 




// use routes
app.use(home)
app.use(root)
app.use(acc)
app.use(login)
app.use(sign_in)
app.use(help_page)
app.use(contact)





























app.use((req, res) => {
  res.status(404).render('not-found', {title: "not found"})
})
