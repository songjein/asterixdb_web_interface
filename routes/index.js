var express = require('express');
var router = express.Router();

var http = require('http');

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query', function(req, res, next) {
	var host = "http://sclab.gachon.ac.kr:19002";
	var path = "/query?query=";
	var query = req.query.query;

	request({
		url: host + path + query,
		json: true
	}, function(error, response, body){
		res.json(body);
	});

});

router.get('/dev1', function(req, res, next) {
  res.render('dev1', { title: 'jein\'s dev page' });
});

router.get('/dev2', function(req, res, next) {
  res.render('dev2', { title: 'soyeop\'s dev page' });
});

router.get('/dev3', function(req, res, next) {
  res.render('dev3', { title: 'taesoo\'s dev page' });
});

module.exports = router;
