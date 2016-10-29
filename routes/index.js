var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', cards: [["1", "card1"], ["2", "card2"]] });
});

/* GET redeemReward page. */
router.get('/redeemReward', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25.00" });
});

module.exports = router;
