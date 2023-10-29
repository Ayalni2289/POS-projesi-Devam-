const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
    {
        customerName: {type:String,required:true},
        customerPhone:{type:String,required:true},
        paymentMethod:{type:String,required:true},
        subTotal:     {type:Number,required:true},
        cartItems:    {type:Array,required:true},
        tax:          {type:Number,required:true},
        totalAmount:  {type:Number,required:true},
    },
    );

BillSchema.set("timestamps",true);

const Bill = mongoose.model("bills",BillSchema);
module.exports = Bill;