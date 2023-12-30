var express = require("express");

var router = express.Router();

// Middle ware usage
router.use("/", (req, res, next) => {
  req.headers["content-type"] = "application.json";
  console.log("API call received");
  next();
});

// /users/
router.get("/", (req, res, next) => {
  res.send("Headers received" + req.headers["content-type"]);
  res.send("Get Request for Users");
  next();
});

router.use("/", (req, res) => {
  console.log("API call ended");
});

// /users/get_users/
// also dynamic routing explained here by using => req.params
router.get("/get_users/:id", (req, res) => {
  res.send("These are the specific users in the application " + req.params.id);
});

// we can use regular expressions also
router.get("/get_users/[0-9]", (req, res) => {
  res.send("These are the specific users in the application " + req.params.id);
});

// Dynamic routing
router.get("/search/:key([0-9]{4})", (req, res) => {
  res.send("Data captured is " + req.params.key);
});

router.get("/search_username/:key([a-zA-Z]{6})", (req, res) => {
  res.send("Data captured is " + req.params.key);
});

router.get("*", (req, res) => {
  res.send("URL not found");
});

// Usage of the middle wares

module.exports = router;
