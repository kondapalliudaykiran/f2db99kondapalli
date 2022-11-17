var truck = require('../models/truck');
// List of all truck
exports.truck_list = function(req, res) {
 res.send('NOT IMPLEMENTED: truck list');
};
// for a specific truck. 
exports.truck_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await truck.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle truck create on POST.
exports.truck_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: truck create POST');
};
// Handle truck delete form on DELETE.
exports.truck_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: truck delete DELETE ' + req.params.id);
};
// Handle truck update form on PUT. 
exports.truck_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await truck.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.truck_name)  
               toUpdate.truck_name = req.body.truck_name; 
        if(req.body.truck_type) toUpdate.truck_type = req.body.truck_type; 
        if(req.body.truck_size) toUpdate.truck_size = req.body.truck_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS

   // List of all truck
exports.truck_list = async function(req, res) {
    try{
    thetruck = await truck.find();
    res.send(thetruck);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.truck_view_all_Page = async function(req, res) {
    try{
    thetruck = await truck.find();
    res.render('truck', { title: 'truck Search Results', results: thetruck });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle truck create on POST.
exports.truck_create_post = async function(req, res) {
    console.log(req.body)
    let document = new truck();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"truck_type":"goat", "cost":12, "size":"large"}
    document.truck_name = req.body.truck_name;
    document.truck_size = req.body.truck_size;
    document.truck_type = req.body.truck_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
//Handle truck delete on DELETE. 
exports.truck_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await truck.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
// Handle a show one view with id specified by query 
exports.truck_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await truck.findById( req.query.id) 
        res.render('truckdetail',  
{ title: 'truck Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for creating a truck. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.truck_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('truckcreate', { title: 'truck Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a truck. 
// query provides the id 
exports.truck_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await truck.findById(req.query.id) 
        res.render('truckupdate', { title: 'truck Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.truck_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await truck.findById(req.query.id) 
        res.render('truckdelete', { title: 'truck Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 