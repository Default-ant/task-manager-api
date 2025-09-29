const jwt = require("jsonwebtoken");

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // ✅ Safe logging here
  console.log("Setting cookie for user:", userId);
  console.log("Generated token:", token);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None", // 👈 Use "None" for cross-site cookies
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

module.exports = createJWT;