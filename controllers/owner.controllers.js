const ownerModel = require("../models/owner.models");

exports.postListing = (req, res, next) => {
	try {
		const postOwner = new ownerModel({
			username: req.body.username,
			title: req.body.title,
			pets: req.body.pets,
			dates: req.body.dates,
			location: req.body.location,
			additonal_info: req.body.additonal_info,
			payment: req.body.payment,
			image_urls: req.body.image_urls,
		});
		postOwner.save();
		res.sendStatus(201);
	} catch (err) {
		console.log(err);
	}
};

exports.getListings = async (req, res, next) => {
	// const { sortQuery } = req.query;
	try {
		const ownerListing = await ownerModel.find().sort();
		const ownerListingObj = { ownerListing };
		res.status(200).send(ownerListingObj);
	} catch (err) {
		console.log(err);
	}
};

exports.getListing = async (req, res, next) => {
	// const { sortQuery } = req.query;
	const { _id } = req.params;
	try {
		const ownerListing = await ownerModel.findOne({ _id: _id });
		const ownerListingObj = { ownerListing };
		res.status(200).send(ownerListingObj);
	} catch (err) {
		console.log(err);
	}
};

exports.deleteListing = async (req, res, next) => {
	const { _id } = req.params;
	console.log(_id);
	try {
		await ownerModel.deleteOne({ _id: _id });
		res.sendStatus(204);
	} catch (err) {
		console.log(err);
	}
};
