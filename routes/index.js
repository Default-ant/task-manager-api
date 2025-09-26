const express = require("express");
const userRoutes = require("./userRoute");
const taskRoutes = require("./taskRoute");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/task", taskRoutes);

module.exports = router;