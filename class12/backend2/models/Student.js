import mongoose from 'mongoose';

const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: String,
  age: Number
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;
