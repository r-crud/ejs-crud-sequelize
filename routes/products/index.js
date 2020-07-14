const express = require("express");
const router = express.Router();

const {
  userRegistration,
  getAllUsers,
  getUserProfile,
} = require("./controller");

router.get("/", getAllProducts);
router.get("/:name", getProduct);
router.get("/:type/type", getProduct);
router.post("/", userRegistration);
router.put("/:id");
router.delete("/:id");

module.exports = router;
