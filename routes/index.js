var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Jenkins' });
  res.status(200).send("Welcome to Jenkins");
});

module.exports = router;
