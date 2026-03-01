import { pool } from "../config/db.js";

export const createTask = async (req, res) => {
  const { title, description, assignedEmail } = req.body;
  const userId = req.user.id;

  let assignedUserId = null;

  if (assignedEmail) {
    const userResult = await pool.query(
      "SELECT id FROM users WHERE email=$1",
      [assignedEmail]
    );

    if (userResult.rows.length === 0)
      return res.status(404).json({ message: "User not found" });

    assignedUserId = userResult.rows[0].id;
  }

  const result = await pool.query(
    `INSERT INTO tasks (title, description, created_by, assigned_to)
     VALUES ($1,$2,$3,$4) RETURNING *`,
    [title, description, userId, assignedUserId]
  );

  res.json(result.rows[0]);
};

export const getTasks = async (req, res) => {
  const userId = req.user.id;

  const result = await pool.query(
    `SELECT * FROM tasks 
     WHERE created_by=$1 OR assigned_to=$1`,
    [userId]
  );

  res.json(result.rows);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const result = await pool.query(
    "UPDATE tasks SET completed=$1 WHERE id=$2 RETURNING *",
    [completed, id]
  );

  res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM tasks WHERE id=$1", [id]);

  res.json({ message: "Task deleted" });
};