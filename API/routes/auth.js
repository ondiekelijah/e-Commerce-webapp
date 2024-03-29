const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
  });

  try {
    const savedUser = await newUser.save();
    // Remove password from response
    const { password, ...userWithoutPassword } = savedUser._doc;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json(error);
  }
});


// Login
router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(401).json("Invalid credentials")
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)

    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    Originalpassword !== req.body.password && res.status(401).json("Invalid credentials")

    const accesstoken = jwt.sign({
      id: user._id, isAdmin: user.isAdmin
    }, process.env.JWT_SEC, { expiresIn: "1h" })

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accesstoken })

  } catch (error) {
    res.status(500).json(error);
  }
})


module.exports = router;
