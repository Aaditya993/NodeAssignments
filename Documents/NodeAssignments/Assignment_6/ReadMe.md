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

<img width="1244" height="452" alt="image" src="https://github.com/user-attachments/assets/0c8179b5-af01-4437-afe9-cd8bb29e177d" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 15 10 PM" src="https://github.com/user-attachments/assets/10da72de-99ec-4d77-81b7-c0888b91e076" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 14 59 PM" src="https://github.com/user-attachments/assets/915a7b24-b375-4482-b759-c188d4aa25c5" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 14 19 PM" src="https://github.com/user-attachments/assets/9593bd54-84c9-44a5-b652-6bdb17dc3ef4" />






---

## Assignment 2: Request Logger Middleware
**Objective:** Create a global custom middleware named `logger` that intercepts every incoming request and logs the HTTP Method, URL, and Date/Time before passing control to the routes.
* **File:** `assignment2.js`
* **Routes Tested:** `/`, `/about`, `/contact`

### Terminal Output:
<img width="840" height="174" alt="image" src="https://github.com/user-attachments/assets/afc79733-3d9f-4cc3-93d3-65eb1feb979a" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 16 04 PM" src="https://github.com/user-attachments/assets/12734278-4070-4dbb-ac2c-7c3ab4f08df8" />
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/8f17a12a-5739-457c-a9b3-1aaafb258543" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 16 27 PM" src="https://github.com/user-attachments/assets/8d956c24-820e-4bf9-8df9-a38827aca82e" />



---

## Assignment 3: Response Time Middleware
**Objective:** Measure and log the exact time (in milliseconds) taken to process each request using `Date.now()` and the `res.on('finish')` event listener.
* **File:** `assignment3.js`
* **Routes Tested:** `/`, `/products`, `/users`

### Terminal Output:
<img width="378" height="85" alt="Screenshot 2026-09-07 at 10 17 40 PM" src="https://github.com/user-attachments/assets/73212f1f-0b3b-498e-9bbe-986ca1ceaf8d" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 17 05 PM" src="https://github.com/user-attachments/assets/17b549cf-973b-4852-af03-39d7fd2e4093" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 17 17 PM" src="https://github.com/user-attachments/assets/3fb84521-5659-45a1-8a0b-c7c322b1378b" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 10 17 28 PM" src="https://github.com/user-attachments/assets/320339df-7cef-4fd2-a089-69bf9f4d30f9" />
