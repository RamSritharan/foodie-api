const express = require("express");
const router = express.Router();
const restCtrl = require("../../controllers/reviewCont");

router.use("/restaurants/:id/", restCtrl.restIndex);
router.use("/restaurantPost/:id/review", restCtrl.createRest);

module.exports = router;
