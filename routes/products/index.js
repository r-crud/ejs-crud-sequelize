const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductName,
  getProductType,
  addProduct,
  updateProducts,
  deleteProducts,
} = require("./controller");

router.get("/", getAllProducts);
router.post("/name", getProductName);
router.post("/type", getProductType);
router.post("/", addProduct);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
