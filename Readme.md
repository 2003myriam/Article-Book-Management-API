# 📚 Article & Book Management API

A RESTful backend API built with Node.js, Express, and MongoDB to manage users, articles, and books while learning authentication, CRUD operations, and database relationships.

---

# 🚀 Objective

This project was created to practice and understand:

- CRUD Operations
- Authentication (Register / Login)
- MongoDB Relationships
- Role Management
- REST API Design with Express.js

---

# 🧩 Project Overview

The system allows:

- Users to register and log in
- Users to have roles:
  - `author`
  - `reader`
- Authors to create and manage articles
- Readers to view articles
- Articles to contain multiple books

---

# 🔗 Database Relationships

```text
One User (Author) → Many Articles

One Article → Many Books

One Book → belongs to ONE Article
```

---


# 📂 Project Structure

```bash
project/
│
├── models/
│   ├── User.js
│   ├── Article.js
│   └── Book.js
│
├── controllers/
│   ├── userController.js
│   ├── articleController.js
│   └── bookController.js
│
├── routes/
│   ├── userRoutes.js
│   ├── articleRoutes.js
│   └── bookRoutes.js
│
├── config/
│   └── db.js
│
├── server.js
└── package.json
```

---

# 👤 User Model

```js
{
  username: String,
  email: String,
  password: String,
  role: ["author", "reader"],
  created_at: Date,
  logged_at: Date
}
```

---

# 📰 Article Model

```js
{
  title: String,
  content: String,
  categories: ["Science", "Art", "Sports", "Culture"],
  authorId: ObjectId
}
```

---

# 📚 Book Model

```js
{
  title: String,
  description: String,
  articleId: ObjectId
}
```

---

# ⚙️ Features

## 👤 Authentication

### ✅ Register User

Create a new account.

### ✅ Login User

Authenticate a user using email and password.

 
---

# 📰 Articles

## 👤 Author Features

### ✅ Create Article

Only users with role `author` can create articles.

### ✅ Get All Articles of an Author

Retrieve all articles created by a specific author.

### ✅ Get One Article with Its Books

Retrieve a single article and all related books.

---

# 📚 Books

### ✅ Add Books to an Article

Create books linked to a specific article.

### ✅ Get All Books of an Article

Retrieve all books related to one article.

---

# 📌 API Endpoints

## 👤 User Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/register` | Register user |
| POST | `/users/login` | Login user |
| PUT | `/users/:id` | Update user |

---

## 📰 Article Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/articles` | Create article |
  
---

## 📚 Book Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/books` | Add book |
| GET | `/books/article/:articleId` | Get all books of an article |

---
 