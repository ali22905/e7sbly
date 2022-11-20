// get mongoose
const mongoose = require("mongoose");
// get schema
const Schema = mongoose.Schema;


const userSchema = new Schema({
  user_name: String,
  pass: String,
  game: Array,
  price: Array,
  chosen_game: Array,
  start_time: Array,
  chosen_game_price: Array,
  client_name: Array
});

// Create a model based on that schema
// const Model_name = mongoodse.model("Model_name", schema_name)
const User = mongoose.model("User", userSchema);


// export the model
module.exports = User; 