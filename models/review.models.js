const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  username: { type: String, required: true },
  posted_by: { type: String, required: true },
  body: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
