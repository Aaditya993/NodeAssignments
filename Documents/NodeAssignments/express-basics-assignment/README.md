# Express Basics Assignment

## Steps to run the server
1. Clone or download the repository.
2. Open the terminal and navigate to the `express-basics-assignment` directory.
3. Run `npm install` to install the required Express dependencies.
4. Run `node server.js` to start the server.
5. Access the application via `http://localhost:3000` in your web browser.

## Explanation of routes
* **`GET /`, `GET /about`, `GET /contact`:** Basic static routes that return standard welcome and informational text.
* **`GET /user/:name`:** A dynamic route utilizing `req.params` to extract a single parameter (name) directly from the URL path.
* **`GET /product/:id/:category`:** A dynamic route utilizing `req.params` to extract multiple parameters (id and category) from the URL path.
* **`GET /search`:** A route utilizing `req.query` to extract key-value pairs appended to the end of the URL after a question mark (e.g., `?name=john&role=developer`).

##  outputs


<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/25f2fbc8-cee5-4413-8817-4b5649f3d617" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 9 51 59 PM" src="https://github.com/user-attachments/assets/126d386f-1fbc-4c7a-9875-fe885d2cc173" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 9 52 23 PM" src="https://github.com/user-attachments/assets/6dcdd209-1a1f-42b0-a025-c39ad4be4a1f" />
<img width="1470" height="956" alt="Screenshot 2026-09-07 at 9 52 36 PM" src="https://github.com/user-attachments/assets/0f33128a-9e3f-43e3-a6c4-3b011e55c3c7" />
<img width="1486" height="296" alt="image" src="https://github.com/user-attachments/assets/e6fc850e-f5f1-4ae5-ac35-aac1b84614d9" />



