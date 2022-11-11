var truck = require('../models/truck');
// List of all Costumes
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
// Handle Costume create on POST.
exports.truck_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: truck create POST');
};
// Handle Costume delete form on DELETE.
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

   // List of all Costumes
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
   // Handle Costume create on POST.
exports.truck_create_post = async function(req, res) {
    console.log(req.body)
    let document = new truck();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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