const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewId: String,
  reviewTitle: String,
  reviewRating: Number,
  reviewBubble: String,
});

module.exports = mongoose.model("reviews", reviewSchema);
