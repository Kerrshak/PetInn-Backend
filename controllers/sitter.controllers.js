const sitterModel = require("../models/sitter.model");

exports.postListing = (req, res, next) => {
	try {
		const postSitter = new sitterModel({
			username: req.body.username,
			suitable_pets: req.body.suitable_pets,
			dates: req.body.dates,
			location: req.body.location,
			additonal_info: req.body.additonal_info,
			payment: req.body.payment,
			title: req.body.title,
			user_avatar_url: req.body.user_avatar_url,
		});
		postSitter.save();
		res.sendStatus(201);
	} catch (err) {
		console.log(err);
	}
};

exports.getListings = async (req, res, next) => {
	// const { sortQuery } = req.query;
	try {
		const sitterListings = await sitterModel.find().sort();
		const sitterListingsObj = { sitterListings };
		res.status(200).send(sitterListingsObj);
	} catch (err) {
		console.log(err);
	}
};

exports.getListing = async (req, res, next) => {
	// const { sortQuery } = req.query;
	const { _id } = req.params;
	try {
		const sitterListings = await sitterModel.findOne({ _id: _id });
		const sitterListingsObj = { sitterListings };
		res.status(200).send(sitterListingsObj);
	} catch (err) {
		console.log(err);
	}
};

exports.deleteListing = async (req, res, next) => {
	const { _id } = req.params;
	console.log(_id);
	try {
		await sitterModel.deleteOne({ _id: _id });
		res.sendStatus(204);
	} catch (err) {
		console.log(err);
	}
};
