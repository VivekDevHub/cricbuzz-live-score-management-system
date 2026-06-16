# 🏏 CricPulse

> Real-Time Cricket Live Score & Tournament Management System

CricPulse is a production-grade full-stack MERN application that enables cricket tournament management, live scoring, ball-by-ball commentary, playing XI selection, and real-time match updates using Socket.IO.

The platform provides a secure Admin Management Panel for tournament organizers and a Public Fan Portal for cricket enthusiasts to follow live matches and tournament statistics.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT Authentication
* Secure Login & Logout
* Password Hashing using bcryptjs
* Role-Based Access Control (RBAC)

### 👥 User Roles

* Super Admin
* Tournament Admin
* Scorer
* Public User

### 🏆 Tournament Management

* Series Management
* Tournament Management
* Team Management
* Player Management
* Squad Selection
* Playing XI Selection

### 🏏 Match Management

* Match Scheduling
* Toss Management
* Match Lifecycle Control
* Live Match Monitoring

### 📊 Live Scoring System

* Ball-by-Ball Scoring
* Runs & Extras Tracking
* Wicket Management
* Innings Management
* Real-Time Score Updates

### 💬 Commentary System

* Ball-by-Ball Commentary
* Live Commentary Feed
* Match Events Tracking

### 📈 Analytics & Statistics

* Dynamic Points Table
* Team Standings
* Match Results
* Tournament Statistics

### 🔎 Search Functionality

* Search Players
* Search Teams
* Search Tournaments
* Search Series
* Search Matches

### ⚡ Real-Time Features

* Socket.IO Integration
* Instant Score Updates
* Live Commentary Updates
* Match Event Broadcasting

---

## 🏗️ System Architecture

```text
Users
   │
   ▼
React Frontend
   │
   ▼
Express REST APIs
   │
   ▼
MongoDB Database

Real-Time Updates
Socket.IO
   │
   ▼
Connected Clients
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* TanStack Query
* React Router DOM
* Axios
* React Hook Form
* Zod

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Socket.IO

---

## 📂 Project Structure

### Backend

```bash
backend/
│
├── src/
│   ├── config/
│   ├── database/
│   ├── middlewares/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── series/
│   │   ├── tournaments/
│   │   ├── teams/
│   │   ├── players/
│   │   ├── matches/
│   │   ├── scoring/
│   │   └── commentary/
│   │
│   ├── routes/
│   ├── sockets/
│   ├── utils/
│   └── app.js
```

### Frontend

```bash
frontend/
│
├── src/
│   ├── app/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── features/
│   │   ├── auth/
│   │   ├── teams/
│   │   ├── players/
│   │   ├── tournaments/
│   │   ├── matches/
│   │   └── scoring/
│   │
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── utils/
```

---

## 🗄️ Database Collections

```text
users
roles
series
tournaments
teams
players
squads
playing_xis
matches
innings
balls
commentaries
points_tables
```

---

## 🔄 Match Lifecycle

```text
Scheduled
   ↓
Toss
   ↓
Live
   ↓
Innings Break
   ↓
Completed
   ↓
Archived
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/cricpulse.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret

CLIENT_URL=http://localhost:5173
```

---

## 📡 Real-Time Socket Events

```text
match-started
score-updated
wicket-fallen
commentary-added
innings-ended
match-ended
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* MERN Stack Development
* REST API Development
* JWT Authentication
* Role-Based Access Control
* MongoDB Relationships
* Socket.IO Real-Time Communication
* Redux Toolkit State Management
* TanStack Query Data Fetching
* Form Validation using Zod
* Scalable Backend Architecture

---

## 📸 Screenshots

Add your project screenshots here.

```text
/public/screenshots/dashboard.png
/public/screenshots/live-score.png
/public/screenshots/commentary.png
```

---

## 👨‍💻 Author

Vivek Kushwah

Full Stack Developer | MERN Stack | Cloud & DevOps Enthusiast

---

## ⭐ Support

If you found this project useful, please give it a star on GitHub.
