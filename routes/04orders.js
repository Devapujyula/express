var express = require("express");

var router = express.Router();

// /orders/
router.get("/", (req, res) => {
  res.send("Get orders for Users");
});

// /products/get_orders/
router.get("/get_orders", (req, res) => {
  res.send("These are the specific order for the user");
});

module.exports = router;
