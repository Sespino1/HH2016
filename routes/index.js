var express = require('express');
var router = express.Router();
var request = require('superagent');//Nessie required

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
  res.render('login', { title: 'Login', cards: [["1", "card1"], ["2", "card2"]] });
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
  //request.get('http://api.reimaginebanking.com/accounts/58156ab0360f81f104547637?key=c24b7c966f60b4c4200a10bbfe8c3b69').end(function(err, accountNum){
  //  console.log(accountNum);

  res.render('dashboard', { title: 'My Cards', customers:["Bob Dylan"] ,cards: [["12345", "30.00"], ["67891", "25.00"]] });
});

/* GET merchantSelect page. */
router.get('/merchantSelect', function(req, res, next) {
  res.render('merchantSelect', { title: 'Merchant Selection', merchants:["Target", "Walmart"] });
});

/* GET redeemReward page. */
router.get('/redeemReward', function(req, res, next) {
  res.render('redeemReward', { title: 'Redeem', redeemAmount: "25.00" });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

module.exports = router;
