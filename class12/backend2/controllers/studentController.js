import Student from '../models/Student.js'; // Assuming you have a model file for Student

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students.length) {
      return res.status(404).json({ msg: "No students found" });
    }
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const addStudent = async (req, res) => {
  const { myname, myage } = req.body;
  if (!myname || !myage) {
    return res.status(400).json({ error: 'Bad request', details: 'Missing name or age' });
  }
  const newStudent = new Student({ name: myname, age: myage });
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const updateStudent = async (req, res) => {
  const { myname, myage } = req.body;
  try {
    const student = await Student.findOneAndUpdate({ _id: req.params.id }, { name: myname, age: myage }, { new: true });
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ _id: req.params.id });
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }
    res.status(200).json({ msg: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
