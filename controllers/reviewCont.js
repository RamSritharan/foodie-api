const Review = require("../models/reviews");
const Restaurant = require("../models/restaurant");
import { v4 as uuivd4 } from "uuid";

//Post request -> To post a review to the specified restaurant

async function reviewPost(req, res) {
  try {
    let review = await Review.create({
      reviewID: uuivd4(),
      restaurantID: req.body.restID,
      reviewerName: req.body.name,
      reviewRating: req.body.rating,
      reviewBubble: req.body.bubble,
    });

    let restaurant = Restaurant.findbyID(req.params.restaurantId);
    restaurant.restaurantReviews.push(review);

    console.log(review);
    res.status(200).json("ok review logged");
  } catch (err) {
    res.status(400).json(err);
  }
}

//get request for restaurant and reviews
async function restaurantHome(req, res) {
  try {
    const restaurant = Restaurant.findbyID(req.params.restaurantId).populate(
      "reviews"
    );
    restaurant.exec((err, restaurant) => {
      return res.status(200).json(restaurant);
    });
  } catch (err) {
    res.status(400).json(restaurant);
  }
}

//figrue out how to append to one to many

module.exports = { reviewPost, restaurantHome };
