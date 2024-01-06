const Review = require("../models/reviews");
const Restaurant = require("../models/restaurants");

//Post request -> To post a review to the specified restaurant

async function reviewPost(req, res) {
  try {
    let review = await Review.create({
      restaurantID: req.body.id,
      reviewerName: req.body.name,
      reviewRating: req.body.rating,
      reviewBubble: req.body.bubble,
    });

    let restaurant = await Restaurant.findById(req.body.id).exec();
    let newReview = await restaurant.restaurantReviews.push(review);
    restaurant.save();

    console.log("newReview", restaurant.restaurantReviews);

    res.status(201).json("Success");
  } catch (err) {
    res.status(400).json(err);
  }
}

//get request for restaurant and reviews
async function restaurantHome(req, res) {
  try {
    let restaurant = await Restaurant.findById(req.body.id)
      .populate("restaurantReviews")
      .exec();

    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json(err);
  }
}

//figrue out how to append to one to many

module.exports = { reviewPost, restaurantHome };
