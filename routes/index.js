const express = require("express");
const router = express.Router();

const taskRoutes = require("./taskRoute");
const userRoutes = require("./userRoute");


router.use("/task", taskRoutes);
router.use("/user", userRoutes);


module.exports = router;