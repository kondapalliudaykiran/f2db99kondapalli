const mongoose = require("mongoose")
const truckSchema = mongoose.Schema({
truck_name:
{
    type:String,
    required:true
},
truck_type:{
    type:String,
    required:true
},
truck_size:{
    type:Number,
    min:2,max:350

}

})
module.exports = mongoose.model("truck",truckSchema)