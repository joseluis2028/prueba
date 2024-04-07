var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'hola mundo',
  Name: 'Jose Luis',
  Lastname:'Da Conceicao',
  Id:"32138578",
  section:'2',
});
});


module.exports = router;
