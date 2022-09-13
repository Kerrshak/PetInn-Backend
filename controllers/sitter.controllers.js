const sitterModel = require("../models/sitter.models");

exports.postListing = (req, res, next) => {
	try {
		const postSitter = new sitterModel({
			username: req.body.username,
			title: req.body.title,
			suitable_pets: req.body.suitable_pets,
			date_from: req.body.date_from,
			date_to: req.body.date_to,
			location: req.body.location,
			additonal_info: req.body.additonal_info,
			payment: req.body.payment,
			user_avatar_url: req.body.user_avatar_url,
		});
		postSitter.save();
		res.sendStatus(201);
	} catch (err) {
		if (err) next(err);
	}
};

exports.getListings = async (req, res, next) => {
	const { username, date_from, date_to, location, pets } = req.query;
	try {
		const filters = {};
		if (username !== undefined) {
			filters.username = username;
		}
		if (location !== undefined) {
			filters.location = location;
		}
		if (pets !== undefined) {
			filters.pets = pets;
		}
		if (date_from !== undefined) {
			filters.date_from = { $gte: date_from };
		}
		if (date_to !== undefined) {
			filters.date_to = { $lte: date_to };
		}
		const sitterListings = await sitterModel.find(filters).sort();
		const sitterListingsObj = { sitterListings };
		res.status(200).send(sitterListingsObj);
	} catch (err) {
		if (err) next(err);
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
		if (err) next(err);
	}
};

exports.deleteListing = async (req, res, next) => {
	const { _id } = req.params;
	console.log(_id);
	try {
		await sitterModel.deleteOne({ _id: _id });
		res.sendStatus(204);
	} catch (err) {
		if (err) next(err);
	}
};
