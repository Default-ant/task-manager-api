const express = require("express");
const router = express.Router();

const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/task", taskRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;