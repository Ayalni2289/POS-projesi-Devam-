const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = process.env.PORT || 5000;

//router

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const registerRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");

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
app.use(logger("dev"));

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth",registerRoute);
app.use("/api/users",usersRoute);

app.listen(port, () => {
    connect();
    console.log(`Server started on port ${port}`);
});

