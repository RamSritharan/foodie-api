const express = require("express");
const router = express.Router();
const revCtrl = require("../../controllers/reviewCont.js");

router.use("/restaurants/:id/", revCtrl.restaurantHome);
router.use("/restaurants/:id/post/", revCtrl.reviewPost);

module.exports = router;
