var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var truck_controller = require('../controllers/truck');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/truck', truck_controller.truck_create_post);
// DELETE request to delete Costume.
router.delete('/truck/:id', truck_controller.truck_delete);
// PUT request to update Costume.
router.put('/truck/:id', truck_controller.truck_update_put);
// GET request for one truck.
router.get('/truck/:id', truck_controller.truck_detail);
// GET request for list of all truck items.
router.get('/truck', truck_controller.truck_list);
module.exports = router;