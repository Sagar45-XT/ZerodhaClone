const { Signup, Login } = require("../controllers/AuthController");
const router = require("express").Router();
const {userVerification} = require("../middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification, (req, res) => {
  res.json({ message: "User verified", user: req.user });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});


module.exports = router;