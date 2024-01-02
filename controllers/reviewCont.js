const Review = require("../models/reviews");
const Restaurant = require("../models/restaurants");

//Post request -> To post a review to the specified restaurant

async function reviewPost(req, res) {
  console.log(req.body);
  // try {
  let restaurant = Restaurant.findbyID(req.body.id);

  let review = await Review.create({
    restaurantID: req.body.id,
    reviewerName: req.body.name,
    reviewRating: req.body.rating,
    reviewBubble: req.body.bubble,
  });

  restaurant.restaurantReviews.unshift(review);

  res.status(200).json("ok review logged");
  // } catch (err) {
  //   res.status(400).json(err);
  // }
}

//get request for restaurant and reviews
async function restaurantHome(req, res) {
  try {
    const restaurant = Restaurant.findbyID(req.params.id).populate("reviews");
    restaurant.exec((err, restaurant) => {
      return res.status(200).json(restaurant);
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

//figrue out how to append to one to many

module.exports = { reviewPost, restaurantHome };
