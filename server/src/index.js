// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";
// import { pool } from "./config/db.js";


// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes);
// app.get("/test-db", async (req, res) => {
//   const result = await pool.query("SELECT NOW()");
//   res.json(result.rows);
// });

// app.listen(process.env.PORT || 3000, () =>
//   console.log(`Server running on port ${process.env.PORT || 3000}`)
// );

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
