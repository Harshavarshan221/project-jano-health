// import pkg from "pg";
// import dotenv from "dotenv";

// dotenv.config();

// const { Pool } = pkg;

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false
// });

// pool.connect()
//   .then(() => console.log("PostgreSQL Connected ✅"))
//   .catch((err) => console.error("PostgreSQL Connection Error ❌", err));

  


import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});