const express = require("express");
const taskController = require("../controllers/taskController");
const auth = require("../controllers/authController").auth;

const router = new express.Router();

router.post("/tasks", auth, taskController.createTask);
router.get("/tasks", auth, taskController.getTasks);
router.patch("/tasks/:id", auth, taskController.updateTask);
router.delete("/tasks/:id", auth, taskController.deleteTask);

module.exports = router;
