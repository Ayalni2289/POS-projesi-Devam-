const express = require("express");
const router = express.Router();
const Image = require("../models/Image.js");

//! upload image

router.post("/upload", async (req, res) => {
  console.log(req.body);
  const image = new Image({
    image: req.body.img
  })
  await image.save();
  res.send({message: "Image uploaded Successfully "});
  });

  module.exports = router;