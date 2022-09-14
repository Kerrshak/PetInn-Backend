const userModel = require("../models/user.models");
const bcryptJs = require("bcryptjs");

exports.insertUserController = (req, res, next) => {
	bcryptJs.hash(req.body.password, 10, async (err, hashedPassword) => {
		try {
			const user = new userModel({
				username: req.body.username,
				password: hashedPassword,
				email: req.body.email,
				avatar_url: req.body.avatar_url,
				bio: req.body.bio,
				location: req.body.location,
				watchlist: req.body.watchlist,
			});
			await user.save();
			res.sendStatus(201);
		} catch (error) {
			if (err) next(err);
		}
	});
};

exports.loginUserController = (req, res, next) => {
	const userObj = { ...req.user._doc };
	delete userObj.password;
	res.send({ user: userObj });
};

exports.logoutUserController = async (req, res, next) => {
	await req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.sendStatus(200);
	});
};

exports.getUserInfoController = async (req, res, next) => {
	try {
		const { username } = req.params;
		const user = await userModel.findOne({ username: username });
		console.log(user);
		const userObj = user;

		res.status(200).send({ email: userObj });
	} catch (err) {
		next(err);
	}
};

exports.patchWatchList = async (req, res, next) => {
	const newListing = req.body;
	const { username } = req.params;
	console.log(newListing);
	try {
		const updateWatchList = await userModel.findOneAndUpdate(
			{ username: username },
			{ $push: { watchlist: newListing } }
		);
		const updatedUser = { user: updateWatchList };
		res.status(201).send(updatedUser);
	} catch (err) {
		next(err);
	}
};

exports.deleteWatchList = async (req, res, next) => {
	const { username } = req.params;
	const { _id } = req.query;
	try {
		const updateWatchList = await userModel.findOneAndUpdate(
			{ username: username },
			{
				$pull: {
					watchlist: { _id: _id },
				},
			}
		);
		res.status(200).send({ updateWatchList });
	} catch (err) {
		next(err);
	}
};

// exports.findAllUser = async (req, res, next) => {
// 	try {
// 		const updateWatchList = await userModel.find();
// 		console.log(updateWatchList);
// 		res.status(200).send({ updateWatchList });
// 	} catch (err) {
// 		next(err);
// 	}
// };
