const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        title:{type:String,required:true},
    },
    );

categorySchema.set("timestamps",true);


const Category = mongoose.model("categories",categorySchema);
module.exports = Category;