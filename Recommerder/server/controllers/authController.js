const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Signup Controller
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
     console.log(req.body);
     
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists." });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    // Create token
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
