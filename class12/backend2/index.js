import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import connectToMongoDB from './config/db.js';

dotenv.config();
connectToMongoDB();
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json()); // Middleware to parse JSON requests

app.use((req, res, next) => {
  console.log("Middleware running")
  next();
});

// Use student routes
app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
