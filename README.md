**App runs at**:

http://localhost:5173



# 🚀 Real-Time Collaborative Task Manager

A full-stack collaborative task management application built using modern web technologies.  
This project demonstrates secure authentication, relational data handling, task assignment logic, and deployment readiness.

---

## 📌 Project Overview

This application allows authenticated users to:

- 🔐 Sign in securely using Google (Clerk Authentication)
- 📝 Create, delete, and manage tasks
- 👥 Assign tasks to other users via email
- 📱 Use a responsive, premium UI
- 🔒 Access protected routes securely

The project follows a clean separation of concerns between frontend and backend.

---

# 🛠 Tech Stack

## Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Clerk (Google OAuth Authentication)

## Backend
- Node.js
- Express.js
- PostgreSQL
- Clerk JWT verification
- pg (PostgreSQL driver)

## Database
- PostgreSQL (Relational schema)
- Hosted locally (can be deployed via Railway)

---

# 🧱 Architectural Decisions

## 1️⃣ Separation of Client and Server

The project is structured into:


client/ → React frontend
server/ → Express backend


This ensures:
- Scalability
- Clear separation of responsibilities
- Independent deployment

---

## 2️⃣ Authentication Strategy

Authentication is handled using **Clerk** instead of custom JWT logic.

Why Clerk?

- Secure OAuth handling
- Google Sign-In support
- Session management
- Backend token verification
- No password storage required

Flow:
1. User signs in via Clerk (Google OAuth)
2. Clerk issues a session token
3. Frontend sends token in Authorization header
4. Backend verifies token using Clerk middleware
5. Protected routes are accessed securely

---

## 3️⃣ Database Design

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



Design Rationale:

Tasks are relationally connected to users
Foreign keys enforce referential integrity
Supports task assignment logic



4️⃣ Assignment Logic

When assigning a task:

Backend checks if user exists via email
If user exists → assigns task using assigned_to
If user does not exist → appropriate error is returned

This ensures:
No orphan task assignments
Proper relational structure



5️⃣ Security Considerations

Environment variables for all secrets
Clerk token verification on backend
No passwords stored in database
.gitignore excludes sensitive files
CORS enabled for controlled access



⚙️ Local Development Setup

1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/project-jano-health.git
cd project-jano-health

2️⃣ Backend Setup
cd server
npm install

Create .env in server/:

PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/taskflow
CLERK_SECRET_KEY=your_clerk_secret_key

Run backend:
npm run dev



3️⃣ Frontend Setup
cd client
npm install

Create .env in client/:

VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

Run frontend:

npm run dev



**App runs at**:

http://localhost:5173


🚀 Deployment Steps




Frontend Deployment (Vercel)

Push project to GitHub
Import repository into Vercel


Set environment variable:

VITE_API_URL
VITE_CLERK_PUBLISHABLE_KEY


Deploy


Backend Deployment (Railway / Render)

Create new project
Connect GitHub repository


Add environment variables:

PORT
DATABASE_URL
CLERK_SECRET_KEY
Deploy service
Database Deployment
Use Railway PostgreSQL or Render PostgreSQL
Update DATABASE_URL accordingly


🎯 Core Features Implemented

✅ Google Authentication
✅ Protected Dashboard
✅ CRUD Task Management
✅ Task Assignment by Email
✅ PostgreSQL Relational Schema
✅ Secure Backend Validation
✅ Responsive UI
✅ Modular Code Structure
📈 Future Improvements
Real-time updates with Socket.io
Task filtering and categorization
Notifications system
Unit and integration testing
Docker containerization

👨‍💻 Author

Harsha Vardhan
Full-Stack Developer