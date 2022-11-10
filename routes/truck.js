var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('truck', { title: 'Search Results truck' });
});
var express = require('express');
const truck_controlers= require('../controllers/truck');
var router = express.Router();
/* GET costumes */
router.get('/', truck_controlers.truck_view_all_Page );
module.exports = router;