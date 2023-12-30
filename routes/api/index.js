const express = require("express");
const router = express.Router();
const restCtrl = require("../../controllers/restaurantCont.js");

router.get("/restaurants", restCtrl.restIndex);
router.post("/restaurants", restCtrl.createRest);

module.exports = router;
