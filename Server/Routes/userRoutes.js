import express from 'express';
import { registerUser, loginUser, getProfile } from '../Controllers/userController.js';
import authMiddleware from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

export default router;
