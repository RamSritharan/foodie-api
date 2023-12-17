const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantId: Number,
  restaurantName: Number,
  restaurantType: String,
  restaurantPriceMeter: Number,
  restaurantReviews: Object,
});

module.exports = mongoose.model("restaurant", restaurantSchema);
