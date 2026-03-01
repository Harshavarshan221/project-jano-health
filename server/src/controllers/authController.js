import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, hashedPassword]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (result.rows.length === 0)
    return res.status(400).json({ message: "User not found" });

  const user = result.rows[0];

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, user });
};