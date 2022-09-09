const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  avatar_url: { type: String, required: true },
  bio: { type: String, required: false },
  location: { type: String, required: true },
  watchlist: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
