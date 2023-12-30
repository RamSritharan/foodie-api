const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantId: Number,
  restaurantName: Number,
  restaurantType: String,
  restaurantPriceMeter: Number,
<<<<<<< HEAD
  restaurantReviews: Object,
=======
  restaurantReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
>>>>>>> b4e9b96 (Finishing routing)
});

module.exports = mongoose.model("restaurant", restaurantSchema);
