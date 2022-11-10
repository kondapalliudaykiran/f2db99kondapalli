const mongoose = require("mongoose")
const truckSchema = mongoose.Schema({
costume_type: String,
truck_name:String,
truck_type:String,
truck_size: Number,

})
module.exports = mongoose.model("truck",truckSchema)