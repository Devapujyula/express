var express = require("express");

var router = express.Router();

// /products/
router.get("/", (req, res) => {
  res.send("Get Request for Products");
});

// /products/get_products/
router.get("/get_products", (req, res) => {
  res.send("These are the specific products in the cart");
});

module.exports = router;
