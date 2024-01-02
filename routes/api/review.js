const express = require("express");
const router = express.Router();
const revCtrl = require("../../controllers/reviewCont.js");

router.use("/restaurant/:id/", revCtrl.restaurantHome);
router.use("/restaurant/:id/post/", revCtrl.reviewPost);

module.exports = router;
