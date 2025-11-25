import { verifyToken } from '../utils/jwt.js';

const bearer = (req, res) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized', error: 'Missing bearer token' });
        }

        const token = authorization.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized', error: 'Invalid token payload' });
        }

        return res.status(200).json({ message: 'Authorized', user: decoded });
    } catch (error) {
        const isAuthError = ['JsonWebTokenError', 'TokenExpiredError'].includes(error.name);
        const status = isAuthError ? 401 : 500;

        return res.status(status).json({
            message: isAuthError ? 'Unauthorized' : 'Server error',
            error: error.message
        });
    }
};

export { bearer };