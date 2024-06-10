

const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
        "name":String,
        "admNo": String,
       " rollNo": String,
        "dob": String,
        "course":String,
        "mob": String,
        "email": String,
        "address": String
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}