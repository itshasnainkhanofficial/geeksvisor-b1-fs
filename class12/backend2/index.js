import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json()); // Middleware to parse JSON requests

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use((req, res, next) => {
  console.log("Middleware running")
  next();
});

// Use student routes
app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
