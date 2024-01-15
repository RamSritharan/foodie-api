const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantId: Number,
  restaurantName: String,
  restaurantType: String,
  restaurantPriceMeter: Number,
  restaurantReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
});

module.exports = mongoose.model("restaurant", restaurantSchema);
