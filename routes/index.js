var express = require('express');
var router = express.Router();
var request = require('superagent'); //Nessie required

/* GET home page. */
router.get('/', function(req, res, next) {
  //Nessie API Keys
  //var api_keys = require('../API_K.json')
  //var key= api_keys.Nessie.Key1;
  request.get('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=14eb8bc8a353786c356e2ab236d923c0').end(function(err, resApi){
      //foo(res.status);
      //res.render(res.body); //do something
      //console.log(key);
      console.log('You got ATM data!');
      console.log(resApi);
      //request.get('/').query({ ATMList: res.text });
      //res.render(res.body); //do something
      res.render('index', { title: 'Harambe Hacks 2016', ATMList: resApi.text });

  });

});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* PROCESS login request. */
router.post('/processLogin', function(req, res, next) {
  res.redirect('/dashboard');
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'My Cards', cards: [["12345", "30.00"], ["67891", "25.00"]] });
});

/* GET merchantSelect page. */
router.get('/merchantSelect', function(req, res, next) {
  res.render('merchantSelect', { title: 'Select a Merchant',
    merchants:["Target", "Starbucks Coffee", "Walmart", "American Eagle Outfitters"] });
});

/* GET merchantSelect page. */
router.get('/redeemCash', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25", icon: "money", heading: "Cash" });
});

/* GET merchantSelect page. */
router.get('/redeemCredit', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25", icon: "credit-card-alt", heading: "Account Credit" });
});

/* GET redeemReward page. */
router.get('/redeemGiftCard', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25", icon: "gift", heading: "eGift Card for " });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

/* PROCESS logout page. */
router.get('/logout', function(req, res, next) {
  // remove user information
  res.redirect('/login');
});

module.exports = router;
