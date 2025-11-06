// ...existing code...
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

module.exports.userVerification = async (req, res, next) => {
  // support token in cookie or Authorization header (Bearer <token>)
  const token =
    req.cookies?.token ||
    (req.headers?.authorization ? req.headers.authorization.split(" ")[1] : null) ||
    req.body?.token ||
    req.query?.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  if (!process.env.TOKEN_KEY) {
    console.error("TOKEN_KEY not set in environment");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
// ...existing code...