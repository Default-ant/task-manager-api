const jwt = require("jsonwebtoken");

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // ✅ allow over HTTP in dev
    sameSite: "lax", // ✅ works with HTTP
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

module.exports = createJWT;
