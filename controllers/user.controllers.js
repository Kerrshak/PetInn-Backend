const userModel = require("../models/user.models");
const bcryptJs = require("bcryptjs");

exports.insertUserController = (req, res, next) => {
  bcryptJs.hash(req.body.password, 10, (err, hashedPassword) => {
    try {
      const user = new userModel({
        username: req.body.username,
        password: hashedPassword,
        avatar_url: req.body.avatar_url,
        bio: req.body.bio,
        location: req.body.location,
        watchlist: req.body.watchlist,
      });
      user.save();
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  });
};

exports.loginUserController = (req, res, next) => {
  res.send({ user: req.user });
};

exports.logoutUserController = async (req, res, next) => {
  await req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
};
