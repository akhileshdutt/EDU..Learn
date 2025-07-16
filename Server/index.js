import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import authRoutes from './Routes/authRoutes.js';

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // optional: only if you plan to use cookies/sessions
}));
app.use(express.json()); // to parse JSON bodies

// ✅ Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes); 



// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅MongoDB Connected');
  app.listen(5000, () => console.log('✅Server running on port 5000'));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
