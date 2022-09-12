const reviewModel = require("../models/review.models");

exports.getReviewsController = async (req, res, next) => {
  try {
    const reviews = await reviewModel.find().sort({ created_at: 1 });
    const reviewsObj = { reviews };

    res.status(200).send(reviewsObj);
  } catch (error) {
    next(error);
  }
};

exports.postReviewsController = async (req, res, next) => {
  try {
    const newReview = new reviewModel({
      username: req.body.listingUsername,
      posted_by: req.user._doc.username,
      body: req.body.body,
    });
    await newReview.save();
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

exports.deleteReviewController = async (req, res, next) => {
  try {
    const { _id } = req.params;
    await reviewModel.deleteOne({ _id: _id });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
