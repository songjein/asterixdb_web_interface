var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
