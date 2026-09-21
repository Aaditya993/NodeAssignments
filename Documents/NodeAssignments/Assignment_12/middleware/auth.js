const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // 1. Read the token from the request header
    const authHeader = req.header('Authorization');
    
    // 2. Reject if missing
    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // 3. Extract the token from the "Bearer JWT_TOKEN" format
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Access Denied. Invalid token format." });
    }

    // 4. Verify the token using your secret
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user info to the request
        next(); // Token is valid, allow the request to continue
    } catch (err) {
        // 5. Reject if invalid or expired
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;