# 🚀 Real-Time Collaborative Task Manager

A full-stack collaborative task management application built with modern technologies.  
This application allows users to securely authenticate, manage tasks, and assign tasks to other users using email — all within a clean, premium user interface.

---



## 📌 Overview

This project was built as a full-stack assignment focusing on:

- Secure authentication
- Relational database management
- Clean UI/UX design
- Scalable backend architecture
- Proper environment management
- Deployment readiness

The app supports task creation, deletion, assignment, and authentication via Google OAuth using Clerk.

---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Clerk Authentication

### 🔹 Backend
- Node.js
- Express.js
- PostgreSQL
- Clerk backend verification
- pg (PostgreSQL driver)

### 🔹 Authentication
- Clerk (Google OAuth + session management)

---

## 🧱 Architecture


Client (React)
↓
Express Backend
↓
PostgreSQL Database


Authentication Flow:

1. User signs in via Clerk (Google)
2. Clerk generates session + token
3. Frontend sends token to backend
4. Backend verifies token using Clerk
5. Data is securely fetched/stored

---

## 📂 Folder Structure


project-jano-health/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── server/ # Express backend
│ ├── src/
│ │ ├── config/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── controllers/
│ │ └── index.js
│ └── package.json
│
├── .gitignore
└── README.md


---

## 🔐 Authentication

Authentication is powered by **Clerk**:

- Google Sign-In
- Session handling
- Token-based backend validation
- Secure route protection

No passwords are stored in the database.

---

## 🗄 Database Schema

### Users Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Tasks Table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_by INTEGER REFERENCES users(id) ON DELETE CASCADE,
    assigned_to INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



⚙️ Local Setup Guide
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/project-jano-health.git
cd project-jano-health
🔧 Backend Setup
cd server
npm install

Create a .env file inside server/:

PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/taskflow
CLERK_SECRET_KEY=your_clerk_secret_key

Run backend:

npm run dev
🎨 Frontend Setup
cd client
npm install

Create a .env file inside client/:

VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

Run frontend:

npm run dev



**App runs at**:

http://localhost:5173



🎯 Core Features  ##

✅ Google Authentication
✅ Protected Dashboard
✅ Create Tasks
✅ Delete Tasks
✅ Assign Tasks by Email
✅ PostgreSQL relational structure
✅ Clean and responsive UI
✅ Environment-based configuration
✅ Modular backend architecture
💎 UI/UX Highlights
Premium Tailwind-based design
Clean spacing and typography
Responsive layout (Desktop + Tablet + Mobile)
Modal-based task creation
Smooth transitions and hover effects


🔒 Security

Clerk JWT verification on backend
No passwords stored in database
Environment variables for secrets
.gitignore configured for sensitive files



🚀 Deployment (Planned / Optional)

Frontend → Vercel
Backend → Railway / Render
Database → Railway PostgreSQL
📈 Future Enhancements
🔄 Real-time updates using Socket.io
🔔 Notification system
📊 Task filtering & analytics
🧪 Unit testing
🐳 Docker containerization

👨‍💻 Author

Harsha Vardhan
Built as part of a Full-Stack Internship Assignment.

📄 License
This project is for educational and evaluation purposes.


---

# 🚀 After Adding

Run:

```bash
git add README.md
git commit -m "Add complete professional README"
git push
