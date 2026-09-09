# Assignment 7: Express Route & Query Parameters

This repository contains three Express.js applications demonstrating dynamic routing using Route Parameters (`req.params`), Query Parameters (`req.query`), and a combination of both.

## How to Run
1. Navigate into this directory: `cd Assignment_7`
2. Install dependencies: `npm install express`
3. Run each file individually using Node.js (e.g., `node assignment1.js`).
4. Stop the server using `Ctrl + C` in the terminal before running the next file.

---

## Assignment 1: Route Parameters
**Objective:** Implement dynamic routing using Route Parameters to extract a student ID from the URL path.
* **File:** `assignment1.js`
* **Route Tested:** `/student/:id`
* **Test URL:** `http://localhost:3000/student/101`

### Browser Output:
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/76e9c6b6-66bf-4ce8-aca9-da5ff9a08bbf" />


---

## Assignment 2: Query Parameters
**Objective:** Retrieve and display optional data appended to the URL using Query Parameters. Includes error handling for missing queries.
* **File:** `assignment2.js`
* **Route Tested:** `/search`
* **Test URLs:** 
  * `http://localhost:3000/search?name=Aaditya&course=Node.js`
  * `http://localhost:3000/search` (To test empty state)

### Browser Output (Valid Query):
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/4b0f9388-dee5-416d-ae89-05de8656aa2c" />



### Browser Output (Empty Query):
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/5d555f87-6a41-4cc7-bab8-475608262eda" />

---

## Assignment 3: Student Profile (Combined Parameters)
**Objective:** Build a dynamic route that simultaneously extracts data from both route parameters (ID) and query parameters (Name, Course).
* **File:** `assignment3.js`
* **Route Tested:** `/student/:id`
* **Test URL:** `http://localhost:3000/student/101?name=Aaditya&course=FullStack`

### Browser Output:
<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/7d72106c-acbb-424e-badf-97e9f84f3d8f" />
