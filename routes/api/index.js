const express = require("express");
const router = express.Router();
const restCtrl = require("../../controllers/restaurantCont.js");

router.use("/restaurants", restCtrl.restIndex);
router.use("/restaurantPost", restCtrl.createRest);

module.exports = router;
