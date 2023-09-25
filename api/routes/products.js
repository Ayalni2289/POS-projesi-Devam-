const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

//! Get all product
router.get("/get-product", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});
//! Add a new category
router.post("/add-product", async (req, res) => {
    try {
      const newPorduct = new Product(req.body);
      await newPorduct.save();
      res.status(200).json("Item added successfully.");
    } catch (error) {
      res.status(400).json(error);
    }
  });

//! Update a category
router.put("/update-product", async (req, res) => {
    try {
        await Product.findOneAndUpdate({_id:req.body.categoryId},req.body);
        res.status(200).json("Item updated successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
    });

//! Delete a category
router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({_id:req.body.categoryId});
        res.status(200).json("Item deleted successfully.");
    } catch (error) {
        res.status(400).json(error);
    }
    });
module.exports = router;