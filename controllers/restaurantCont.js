const Restaurant = require("../models/restaurants");

//Get request to view restuarants
async function restIndex(req, res) {
  try {
    let restaurants = await Restaurant.find({}).sort();

    res.status(200).json(restaurants);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Get request to view a specific restaurant
async function restFind(req, res) {
  try {
    console.log("hello", req.body.id);

    let restaurantbyId = await Restaurant.findById(req.body.id).exec();
    console.log(restaurantbyId);
    res.status(200).json(restaurantbyId);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Post request to post restuarants
async function createRest(req, res) {
  try {
    const post = await Restaurant.create({
      restaurantName: req.body.restaurantName,
      restaurantType: req.body.restaurantType,
      restaurantPriceMeter: req.body.restaurantPriceMeter,
    });
    console.log(post);

    res.status(201).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  restIndex,
  createRest,
  restFind,
};
