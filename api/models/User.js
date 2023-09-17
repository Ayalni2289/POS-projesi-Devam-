const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
    },
    {timestapms:true} 
    );


const User = mongoose.model("categories",UserSchema);
module.exports = User;