const express = require("express");
const categoryController = require("../controllers/categoryController");
const auth = require("../controllers/authController").auth;

const router = new express.Router();

router.post("/categories", auth, categoryController.createCategory);
router.get("/categories", auth, categoryController.getCategories);
router.patch("/categories/:id", auth, categoryController.updateCategory);
router.delete("/categories/:id", auth, categoryController.deleteCategory);

module.exports = router;
