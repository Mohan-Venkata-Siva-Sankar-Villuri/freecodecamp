import { Router } from "express";
import { sign } from "jsonwebtoken";
import { compareSync } from "bcrypt";
import { findOne } from "../models/User";

const router = Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findOne({ email });

    if (!user || !compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
