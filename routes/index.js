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

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'My Cards', cards: [["12345", "30.00"], ["67891", "25.00"]] });
});

/* GET merchantSelect page. */
router.get('/merchantSelect', function(req, res, next) {
  res.render('merchantSelect', { title: 'Merchant Selection', merchants:["Target", "Walmart"] });
});

/* GET redeemReward page. */
router.get('/redeemReward', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25.00" });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

module.exports = router;
