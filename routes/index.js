var express = require('express');
var router = express.Router();
var request = require('superagent');//Nessie required



/* GET home page. */
router.get('/', function(req, res, next) {
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

//Nessie API Keys
//var api_keys = require('../API_K.json')
//var key= api_keys.Nessie.Key1;


module.exports = router;
