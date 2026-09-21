# Assignment 10: Firebase Firestore & Schema Validation

This assignment demonstrates a secure connection between an Express.js backend and Firebase Firestore. It utilizes `joi` for strict schema validation to ensure only properly formatted data is stored in the database.

## 1. Firebase Connection
**Objective:** Connect the Express application to Firebase Firestore and log a success message.
<img width="1128" height="180" alt="image" src="https://github.com/user-attachments/assets/e0de1d68-975d-4e71-b4ff-509194660fee" />


## 2. Folder Structure
**Objective:** Maintain a modular architecture separating config, schema, router, and server logic.
<img width="281" height="266" alt="Screenshot 2026-09-21 at 10 33 38 AM" src="https://github.com/user-attachments/assets/54b78290-ba24-4e46-86c5-0c9a9e7764f2" />


## 3. Schema Validation Error Handling
**Objective:** Reject incoming POST requests that fail schema rules (e.g., age out of bounds, invalid email format).
<img width="1110" height="466" alt="Screenshot 2026-09-21 at 10 35 22 AM" src="https://github.com/user-attachments/assets/65baf17c-86ac-4441-b19f-09b18e166b2f" />


## 4. Successful POST Request
**Objective:** Accept valid user data and initiate the Firestore storage process.
<img width="1114" height="464" alt="Screenshot 2026-09-21 at 10 35 43 AM" src="https://github.com/user-attachments/assets/b121e348-f337-49ac-90dd-1f5d4f914ed6" />


## 5. Firestore Storage Verification
**Objective:** Visually confirm the valid user data was successfully inserted into the `users` collection.
<img width="2940" height="1860" alt="image" src="https://github.com/user-attachments/assets/e385c225-5c45-4293-b605-1105f9d14791" />
