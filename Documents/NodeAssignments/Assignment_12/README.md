# Assignment 12: Secure User Authentication System

A comprehensive Node.js and Express backend demonstrating secure user registration, login, and protected routes using MongoDB Atlas, bcrypt, and JSON Web Tokens (JWT).

## 🗄️ Project Architecture & Deliverables
* **Node.js/Express Project:** Fully functional backend server.
* **Database:** MongoDB Atlas implementation using Mongoose.
* **Schema/Model:** `schema/userSchema.js`
* **Authentication Middleware:** `middleware/auth.js`
* **Routes:** `router/authRouter.js` (Register, Login, and Profile endpoints).
* **Environment Management:** `.env.example` and `.gitignore` configured to secure credentials.

## 📸 Testing & Verification Screenshots

### 1. Database Configuration
* **User Stored in MongoDB Atlas:** 

![alt text](image-1.png)

* **Hashed Password Visible in Atlas:** 

![alt text](image-2.png)

### 2. Registration API (`POST /register`)
* **Successful Registration in Postman:** 
![alt text](image-3.png)

### 3. Login API (`POST /login`)
* **Successful Login & JWT Token Received:** 
![alt text](image-4.png)

### 4. Private Profile API (`GET /profile`)
* **Access Without Token (Expected: 401 Unauthorized):** 
![alt text](image-5.png)

* **Access With Invalid Token (Expected: 401 Unauthorized):** 
![alt text](image-6.png)

* **Access With Valid Token (Expected: 200 OK):** 
![alt text](image-7.png)