const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;

//router

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");

dotenv.config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        throw error;
    }
}
//milddleware
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);

app.listen(port, () => {
    connect();
    console.log(`Server started on port ${port}`);
});

