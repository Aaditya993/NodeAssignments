# Assignment 6: Express Middleware

This repository contains three separate Express.js applications demonstrating different implementations of middleware (Router-level, Global, and Response Time).

## How to Run
1. Navigate into this directory: `cd Assignment_6`
2. Install dependencies: `npm install`
3. Run each file individually using Node.js (e.g., `node assignment1.js`).
4. Stop the server using `Ctrl + C` before running the next file.

---

## Assignment 1: Router-Level Middleware
**Objective:** Implement router-level middleware using Express Router that logs the HTTP Method, URL, and Date/Time exclusively for routes mounted under `/api`.
* **File:** `assignment1.js`
* **Routes Tested:** `/api/students`, `/api/courses`, `/api/faculty`

### Terminal Output:
*(Drag and drop your Assignment 1 terminal screenshot here)*

---

## Assignment 2: Request Logger Middleware
**Objective:** Create a global custom middleware named `logger` that intercepts every incoming request and logs the HTTP Method, URL, and Date/Time before passing control to the routes.
* **File:** `assignment2.js`
* **Routes Tested:** `/`, `/about`, `/contact`

### Terminal Output:
*(Drag and drop your Assignment 2 terminal screenshot here)*

---

## Assignment 3: Response Time Middleware
**Objective:** Measure and log the exact time (in milliseconds) taken to process each request using `Date.now()` and the `res.on('finish')` event listener.
* **File:** `assignment3.js`
* **Routes Tested:** `/`, `/products`, `/users`

### Terminal Output:
*(Drag and drop your Assignment 3 terminal screenshot here)*