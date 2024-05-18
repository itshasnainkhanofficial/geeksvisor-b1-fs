import express from 'express'
import dotenv from 'dotenv'
import {DBConnect} from './config/db.js'
import { ErrorHandling } from './middleware/ErrorHandling.js'
import StudentRoutes from './routes/student.js'
import cors from 'cors'
const app = express()
dotenv.config();
DBConnect()
app.use(cors())


const PORT = process.env.PORT || 3500


app.use(express.json()); // Middleware to parse JSON requests


// Student Routes
app.use('/student', StudentRoutes)

// Root route
app.get('/', (req, res) => res.send("API is running"))


// Route not found
app.use((req, res, next) => {

    const error = new Error(`Route not Found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
  });
  
  
  // Error handler middleware
  app.use(ErrorHandling);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })