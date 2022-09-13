const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const SitterListingSchema = new Schema({
	username: { type: String, required: true },
	title: { type: String, required: true },
	suitable_pets: { type: Array, required: true },
	payment: { type: Number, required: true, default: 0 },
	date_from: { type: Date, required: true },
	date_to: { type: Date, required: true },
	date_posted: { type: Date, required: true, default: Date.now() },
	reviews: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Reviews",
		required: false,
	},
	rating: { type: Number, required: false },
	location: { type: String, required: true },
	user_avatar_url: { type: String, required: true },
	additional_info: {
		type: String,
		required: true,
		default: "No additional info",
	},
});

const SitterListing = mongoose.model(
	"SitterListing",
	SitterListingSchema,
	"SitterListings"
);

module.exports = SitterListing;
