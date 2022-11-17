const mongoose = require("mongoose")
const truckSchema = mongoose.Schema({
truck_name:String,
truck_type:String,
truck_size: Number,

})
module.exports = mongoose.model("truck",truckSchema)