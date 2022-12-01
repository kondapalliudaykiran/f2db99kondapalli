var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('truck', { title: 'Search Results truck' });
});
var express = require('express');
const truck_controlers= require('../controllers/truck');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET truck */
router.get('/', truck_controlers.truck_view_all_Page );
/* GET detail truck page */ 
router.get('/detail',secured, truck_controlers.truck_view_one_Page); 
/* GET create truck page */ 
router.get('/create',secured, truck_controlers.truck_create_Page); 
/* GET create update page */ 
router.get('/update',secured, truck_controlers.truck_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, truck_controlers.truck_delete_Page); 
 
 
module.exports = router;

 