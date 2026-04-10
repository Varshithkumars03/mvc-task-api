# 🧩 MVC Task API – Structured Backend (VTU Internship)

A well-structured Task Management API built using **Express.js** following the **MVC (Model-View-Controller)** architecture. This project demonstrates clean code organization, separation of concerns, and scalable backend design.

---

## 🚀 Features

* Full CRUD operations for tasks
* Clean MVC architecture
* Modular and maintainable codebase
* RESTful API design

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
mvc-task-api/
│
├── controllers/
│   └── taskController.js   # Handles business logic
│
├── models/
│   └── taskModel.js        # Stores task data
│
├── routes/
│   └── taskRoutes.js       # Defines API endpoints
│
├── server.js               # Entry point
├── package.json
```

---

## ▶️ How to Run

1. Install dependencies:

```
npm install
```

2. Start the server:

```
node server.js
```

3. Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔹 Create Task

* **POST** `/tasks`

### 🔹 Get All Tasks

* **GET** `/tasks`

### 🔹 Get Task by ID

* **GET** `/tasks/:id`

### 🔹 Update Task

* **PUT** `/tasks/:id`

### 🔹 Delete Task

* **DELETE** `/tasks/:id`

---

## 🧪 Testing

The API can be tested using:

* Browser (for GET requests)
* Postman or curl (for full CRUD operations)

---

## 💡 Key Concept – MVC Architecture

* **Model:** Manages data (task array)
* **Controller:** Contains logic for handling requests
* **Routes:** Maps endpoints to controller functions

This separation improves scalability, readability, and maintainability.

---

## 🌐 GitHub Repository

👉 https://github.com/deepthip711/mvc-task-api



## 👩‍💻 Author

**Deepthi Pradeep**

---
