# 📘 Full Stack Lab Exam Project

### 👨‍💻 By: Krish Gupta

---

## 🚀 Project Overview

This project is a **Full Stack Web Application** developed using **Node.js, Express, MongoDB, and EJS**.
It demonstrates complete **CRUD operations** along with **basic authentication and session handling**.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* EJS (Template Engine)
* Express Session
* HTML, CSS

---

## 📂 Project Structure

```
project/
│
├── models/        # Mongoose Schemas
├── routes/        # Express Routes
├── views/         # EJS Templates
├── public/        # CSS files
├── app.js         # Main Server File
├── package.json
```

---

## ✨ Features

### 🔹 Authentication

* User Register
* User Login
* User Logout
* Session Handling
* Display logged-in user on top right

---

### 🔹 Course Management (CRUD)

* ➕ Create Course
* 📖 View All Courses
* ✏️ Edit Course (except courseName)
* ❌ Delete Course

---

## 📌 Important Constraints

* `courseName` cannot be edited after creation
* Proper routing followed:

  * `/course/new`
  * `/courses`
  * `/courses/:id/edit`
  * `/courses/:id`
  * `/courses/:id/delete`

---

## 🧠 Database Schema

### 👤 User Model

* gender (required)
* number (required)
* coursesEnrolled (array of objects)

### 📚 Course Model

* courseName (required, trimmed)
* price (required)
* image (required)
* duration (required)
* courseStartDate (required)

---

## ▶️ How to Run the Project

### 1️⃣ Install Dependencies

```
npm install
```

### 2️⃣ Start MongoDB

```
mongod
```

### 3️⃣ Run Server

```
node app.js
```

### 4️⃣ Open in Browser

```
http://localhost:3000/login
```

---

## ⚠️ Notes

* `node_modules` is excluded using `.gitignore`
* No dummy data included
* Follows MVC architecture

---

## 🎯 Learning Outcome

* Understanding of full-stack architecture
* CRUD operations with MongoDB
* Session-based authentication
* Routing and MVC structure

---

## 📌 Conclusion

This project successfully implements a **complete full-stack application** with proper structure, routing, and database integration as per lab requirements.

---

⭐ *Thank You!*
