const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getProductName,
  getProductType,
} = require("./controller");

router.get("/", getAllProducts);
router.post("/name", getProductName);
router.post("/type", getProductType);
router.post("/", addProduct);
router.put("/:id");
router.delete("/:id");

module.exports = router;
