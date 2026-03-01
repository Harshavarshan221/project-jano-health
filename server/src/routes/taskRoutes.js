// import express from "express";
// import {
//   createTask,
//   getTasks,
//   updateTask,
//   deleteTask,
// } from "../controllers/taskController.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/", verifyToken, createTask);
// router.get("/", verifyToken, getTasks);
// router.put("/:id", verifyToken, updateTask);
// router.delete("/:id", verifyToken, deleteTask);

// export default router;

import express from "express";
import { pool } from "../config/db.js";
import { requireAuth } from "../middleware/clerkAuth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
  res.json(result.rows);
});

router.post("/", requireAuth, async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1,$2) RETURNING *",
    [title, description]
  );

  res.json(result.rows[0]);
});

router.delete("/:id", requireAuth, async (req, res) => {
  await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
  res.json({ message: "Deleted" });
});

export default router;