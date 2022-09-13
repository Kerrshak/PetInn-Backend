const userModel = require("../models/user.models");

exports.getUserInfoController = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await userModel.findOne({ username: username });
    const userObj = user.email;

    res.status(200).send({ email: userObj });
  } catch (err) {
    next(err);
  }
};
