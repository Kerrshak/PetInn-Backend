const mongoose = require("./connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String, required: true },
  bio: { type: String, required: false },
  location: { type: String, required: true },
  watchlist: { type: Array, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
