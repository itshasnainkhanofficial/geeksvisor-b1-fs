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
// app.use((req, res, next) => {
//   console.log("Middleware running")
//   next()
// })


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




// // For basic understanding using no endpoint
// // Get request
// app.get('/', (req, res) => {
//     res.send('Getting All Students')
// })


// // Add request
// app.post('/', (req, res) => {
//     res.send('Add Student')
// })

// // Update request
// app.put('/', (req, res) => {
//     res.send('Update Student')
// })

// // Delete request
// app.delete('/', (req, res) => {
//     res.send('Delete Student')
// })













// // For basic understanding using same endpoint
// // Get Student request
// app.get('/student', (req, res) => {
//     res.send('Getting All Students')
// })


// // Add Student request
// app.post('/student', (req, res) => {
//     res.send('Add Student')
// })

// // Update Student request
// app.put('/student', (req, res) => {
//     res.send('Update Student')
// })

// // Delete Student request
// app.delete('/student', (req, res) => {
//     res.send('Delete Student')
// })
















// // For basic understanding getting id
// // Get Student request
// app.get('/student', (req, res) => {
//     res.send('Getting All Students')
// })


// // Add Student request
// app.post('/student', (req, res) => {
//     res.send('Add Student')
// })

// // Update Student request
// app.put('/student/:id', (req, res) => {

//   const id = req.params.id;
//   console.log(id)
//     res.send('Update Student')
// })

// // Delete Student request
// app.delete('/student/:username', (req, res) => {

//   const id = req.params.username;
//   console.log(id)

//     res.send('Delete Student')
// })

















// // For proper CRUD implimentation
// schema
const Schema = mongoose.Schema;
const StudentSchema  = new Schema(
  {
    name: String,
    fname: String,
    age: Number
  }
);

const Student = mongoose.model("Student", StudentSchema);





















// // Add Student
// app.post('/',  (req, res) => {

//   // console.log("Post API Hit")
//   // console.log(req)
//   // console.log(req.body)
//   // console.log(req.body.myname)

//   // const name = req.body.myname
//   // const fname = req.body.fname
//   // const age = req.body.myage

//   // console.log({a: name, b: fname, c: age})
//   // console.log({name: name, fname: fname, age: age})
//   // console.log({ name,  fname, age})
//   // res.send("Post API Hit")

//   const { name, fname, age } = req.body;
//   // res.send({  myname,  fname, myage})

//   const newstd = new Student({ name, fname, age});
//   newstd.save();
//   // res.send(newstd)
//   // res.status(201).send(newstd)
//   res.status(201).json(newstd);

 
// })




// // Add Student
app.post('/student', async (req, res) => {
  try {
    const { name, fname, age } = req.body;

    if (!name || !fname || !age ) {
      return res.status(400).json({ error: 'Bad request', details: 'Missing name or fname or age' });
    }

    if(age > 100 || age < 0){
      return res.status(400).json({ error: 'Bad request', details: 'Invalid age' });
    }
    const newStudent = { name, fname, age }

    const newstd = new Student(newStudent);

    await newstd.save();

    return res.status(201).json(newstd);

  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})


// Get All Students
app.get('/student', async (req, res) => {
  try {
    const students = await Student.find()
    console.log(students)
    if(students.length === 0){
      return res.json({ msg: "Student not found" });
    }
    
    return res.status(200).json(students);

  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})



// Get Single Student
app.get('/student/:id', async (req, res) => {

  try {
    const id = req.params.id
    const student = await Student.findById(id);
    console.log(student)
    if (!student) {
      return res.status(404).json({ msg: "No student found" })
    }
  
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})

// Update Student
app.put('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, fname, age } = req.body;

    const studentToUpdate = {name, fname, age }
    const student = await Student.findOneAndUpdate({ _id: id }, studentToUpdate , { new: true });

    // const student = await Student.findOneAndUpdate({_id:id}, { name, fname, age })
    
    if (!student) {
      return res.status(404).json({ msg: "Student not found" })
    }
    
    return res.status(200).json(student);
} catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
}
})

// // Delete Student
app.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id
    const student = await Student.findOneAndDelete({ _id: id });

    if (!student) {
      return res.status(404).json({ msg: "Student not found" })
    }
  
    return res.status(200).json({ msg: "Student deleted" });
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})


























// For Practice one more clean CRUD with staff entity


const StaffSchema  = new Schema(
  {
    name: String,
    role: String,
    cnic: Number
  }
);

const Staff = mongoose.model("Staff", StaffSchema);

// // Add Staff
app.post('/staff', async (req, res) => {
  try {
    const { namef, rolef, cnicf } = req.body;

    if (!namef || !rolef || !cnicf ) {
      return res.status(400).json({ error: 'Bad request', details: 'Missing name or role or cnic' });
    }

    
    const newStaff = { name:namef, role:rolef, cnic:cnicf }

    const newstf = new Staff(newStaff);

    await newstf.save();

    return res.status(201).json(newstf);

  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})


// Get All Staff
app.get('/staff', async (req, res) => {
  try {
    const staffs = await Staff.find()
    
    if(staffs.length === 0){
      return res.json({ msg: "Staff not found" });
    }
    
    return res.status(200).json(staffs);

  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})





// Get Single Student
app.get('/staff/:id', async (req, res) => {

  try {
    const id = req.params.id
    const SingleStaff = await Staff.findById(id);
    console.log(SingleStaff)
    if (!SingleStaff) {
      return res.status(404).json({ msg: "No staff found" })
    }
  
    return res.status(200).json(SingleStaff);
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})



// Update Student
app.put('/staff/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { namef, rolef, cnicf } = req.body;

    const StaffToUpdate = { name:namef, role:rolef, cnic:cnicf }
    const Updatedstaff = await Staff.findOneAndUpdate({ _id: id }, StaffToUpdate , { new: true });

    // const Updatedstaff = await Staff.findOneAndUpdate({_id:id}, { name:namef, role:rolef, cnic:cnicf })
    
    if (!Updatedstaff) {
      return res.status(404).json({ msg: "staff not found" })
    }
    
    return res.status(200).json(Updatedstaff);
} catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
}
})


// // Delete staff
app.delete('/staff/:id', async (req, res) => {
  try {
    const id = req.params.id
    const staffToDelete = await Staff.findOneAndDelete({ _id: id });
    
    if (!staffToDelete) {
      return res.status(404).json({ msg: "staff not found" })
    }
  
    return res.status(200).json({ msg: "staff deleted", });
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})



// Create a CRUD for Person

// Schema 
// Name, Education, age, siblings