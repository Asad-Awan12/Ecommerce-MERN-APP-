const express = require("express");
const Product = require("../Models/Products.model");
const { route } = require("./User.router");
const User = require("../Models/User.models");

const router = express.Router();

// Post-Product
router.post("/add-new-product", async (req, res) => {
  // res.send('hello from Product')
  try {
    const {
      name,
      catogery,
      price,
      description,
      oldPrice,
      image,
      color,
      rating,
    } = req.body;
    const newProduct = new Product({ ...req.body });
    await newProduct.save();
    console.log("Product", newProduct);
    res
      .status(201)
      .send({ message: "Admin Post Product Successfully!! ", newProduct });
  } catch (error) {
    console.log("Error in Post Product!! ", error);
    res.status(500).send({ message: "Error in Post Product!! " });
  }
});
// Get Product
router.get("/", async (req, res) => {
  try {
    const getProducts = await Product.find();
    res
      .status(201)
      .send({ message: "Fetching Products Successfully!! ", getProducts });
  } catch (error) {
    console.log("Error in Fetching Products!! ", error);
    res.status(500).send({ message: "Error in Fetching Products!! " });
  }
});

// get Product by id
router.get("/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getSingleProduct = await Product.findById(getId);
    // check Product
    if (!getSingleProduct) {
      res.status(400).send({ message: "Error in Fetching SingleProduct!! " });
    }
    res.status(201).send({
      message: "Fetching Single Products Successfully!! ",
      getSingleProduct,
    });
  } catch (error) {
    console.log("Error in Fetching Single Products!! ", error);
    res.status(501).send({ message: "Error in Fetching Single Products!! " });
  }
});

// update Product
router.patch("/update-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      catogery,
      price,
      description,
      oldPrice,
      image,
      color,
      rating,
    } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!updateProduct) {
      res.status(400).send({ message: "Updating Product not found!! " });
    }
    res.status(201).send({
      message: "Updating Product Successfully!! ",
      updateProduct,
    });
  } catch (error) {
    console.log("Error in Updating  Product!! ", error);
    res.status(501).send({ message: "Error in Updating  Product!! " });
  }
});

// Delete Product
router.delete("/delete-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(400).send({ message: "Product not found!! " });
    }
    res.status(201).send({
      message: "Delete Product Successfully!! ",
      deleteProduct,
    });
  } catch (error) {
    console.log("Error in Deleting  Product!! ", error);
    res.status(501).send({ message: "Error in Deleting  Product!! " });
  }
});

module.exports = router;
