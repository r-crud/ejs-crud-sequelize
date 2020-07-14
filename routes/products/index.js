const express = require("express");
const router = express.Router();

const { updateProducts, deleteProducts } = require("./controller");

router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;
