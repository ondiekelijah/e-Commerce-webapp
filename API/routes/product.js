const router = require("express").Router();
const Product = require("../models/Product");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");



// Create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find all
router.get("/", async (req, res) => {
  const qNew = req.query.new; // ?new=true
  const qCategory = req.query.category; // ?category=shoes

  try {
    let products; 
    if (qNew) { // if qNew is true, then find all products that are new
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) { // if qCategory is true, then find all products that are in that category
      products = await Product.find({
        categories: {
          $in: [qCategory], // $in is a mongoDB operator that finds all products that are in the category
        },
      });
    } else { // if qNew and qCategory are false, then find all products. Default
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }});

// Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {   
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
