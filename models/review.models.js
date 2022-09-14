const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	username: { type: String, required: true },
	posted_by: { type: String, required: true },
	body: { type: String, required: true },
	rating: { type: Number, default: 0, required: true },
	created_at: { type: Date, default: Date.now() },
});

const Review = mongoose.model("Review", ReviewSchema, "Reviews");

module.exports = Review;
