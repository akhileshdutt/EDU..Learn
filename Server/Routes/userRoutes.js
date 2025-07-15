// import express from "express";
// const router = express.Router();

// router.get("/ping", (req, res) => {
//   res.json({ message: "✅ Server is live and connected to frontend!" });
// });

// export default router;




// import express from 'express';
// import { registerUser, loginUser, getProfile } from '../Controllers/userController.js';
// import authMiddleware from '../Middleware/authMiddleware.js';

import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../Controllers/userController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

export default router;
