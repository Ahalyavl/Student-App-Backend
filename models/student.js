

const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
        "name":{type:String,required:true},
        "admNo": {type:String,required:true},
      
        "dob": {type:String,required:true},
        "course":{type:String,required:true},
        "mob": {type:String,required:true},
        "email": {type:String,required:true},
        "address":{type:String,required:true}
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}