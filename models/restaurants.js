const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantId: String,
  restaurantName: String,
  restaurantType: String,
  restaurantPriceMeter: String,
  restaurantReviews: [{ type: Schema.Types.ObjectId, ref: "reviews" }],
});

module.exports = mongoose.model("restaurant", restaurantSchema);
