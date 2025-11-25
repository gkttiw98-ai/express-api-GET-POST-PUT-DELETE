import { verifyToken } from '../utils/jwt.js';

const test = (req, res) => {
    try {
        // 1. Check if token exists
        if (!req.cookies.token) {
            return res.status(401).json({
                message: "Unauthorized",
                token: "Token not found"
            });
        }

        const token = req.cookies.token;

        // 2. Verify token
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({
                message: "Unauthorized",
                token: "Invalid token"
            });
        }

        // 3. If token is valid
        return res.json({
            message: `Test endpoint is working! ${decoded.email}`
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

export { test };
