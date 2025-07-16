import express from 'express';
import { registerUser, loginUser, getProfile } from '../Controllers/userController.js';
import authMiddleware from '../Middleware/authMiddleware.js';
import { getAllUsers } from '../Controllers/userController.js';

const router = express.Router();
router.get('/users', getAllUsers);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

export default router;
