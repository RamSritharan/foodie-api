const Restaurant = require("../models/restaurants");

//Get request to view restuarants
async function restIndex(req, res) {
  try {
    let restaurants = await Restaurant.find({}).sort("id");
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Post request to post restuarants
async function createRest(req, res) {
  try {
    const post = await Restaurant.create({
      restaurandId: uuivd4(),
      restaurantName: req.body.name,
      restaurantType: req.body.type,
      restaurantPriceMeter: req.body.price,
    });
    console.log(post);

    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  restIndex,
  createRest,
};
