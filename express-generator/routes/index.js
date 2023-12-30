var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Prakash Dsp, Express Learning Module",
    subtitle: "Welcome to Module on Express",
  });
});

router.get("/react", function (req, res, next) {
  res.render("index", {
    title: "Prakash Dsp, React Learning Module",
    subtitle: "Welcome to Module on React",
  });
});

router.get("/tutorial", function (req, res, next) {
  console.log(req.query.course);
  var courseName = req.query.course;
  let courseTitle = "Chinnu's Module -" + courseName;
  res.render("index", {
    title: courseTitle,
    subtitle: "Welcome to Module on React",
  });
});

module.exports = router;
