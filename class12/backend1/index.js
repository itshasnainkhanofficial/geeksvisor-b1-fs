import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config();


const PORT = process.env.PORT || 3500


app.use(express.json()); // Middleware to parse JSON requests



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// // Basic Middleware
app.use((req, res, next) => {
  console.log("Middleware running")
  next()
})


// // For basic understanding
// // Get Student request
// app.get('/allStudents', (req, res) => {
//     res.send('Getting All Students')
// })


// // Add Student request
// app.post('/addStudent', (req, res) => {
//     res.send('Add Student')
// })

// // Update Student request
// app.put('/updateStudent', (req, res) => {
//     res.send('Update Student')
// })

// // Delete Student request
// app.delete('/deleteStudent', (req, res) => {
//     res.send('Delete Student')
// })

















// // For proper CRUD implimentation
// schema
const Schema = mongoose.Schema;
const StudentSchema  = new Schema(
  {
    name: String,
    age: Number
  }
);

const Student = mongoose.model("Students", StudentSchema);

// Get All Students
app.get('/', async (req, res) => {
  try {
    const student = await Student.find();
    console.log({student})
    if (student.length === 0) {
      return res.json({ msg: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
})

// Get Single Student
app.get('/:id', async (req, res) => {

  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: "No student found" })
    }
  
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
})


// Add Student
app.post('/', async (req, res) => {
  try {
    const { myname, myage } = req.body;
    if (!myname || !myage) {
      return res.status(400).json({ error: 'Bad request', details: 'Missing name or age' });
    }
    const newstd = new Student({ name: myname, age: myage });
    await newstd.save();
    res.status(201).json(newstd);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
})

// Update Student
app.put('/:id', async (req, res) => {
  const { myname, myage } = req.body;
  try {
    const student = await Student.findOneAndUpdate({ _id: req.params.id }, { name: myname, age: myage }, { new: true });
    if (!student) {
      return res.status(404).json({ msg: "Student not found" })
    }
    res.status(200).json(student);
} catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
}
})

// Delete Student
app.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ _id: req.params.id });
    if (!student) {
      return res.status(404).json({ msg: "Student not found" })
    }
  
    res.status(200).json({ msg: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})