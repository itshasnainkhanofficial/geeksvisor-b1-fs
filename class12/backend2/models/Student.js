import mongoose from 'mongoose'


// schema
const Schema = mongoose.Schema;
const StudentSchema  = new Schema(
  {
    name: String,
    fname: String,
    age: Number
  }
);

export const Student = mongoose.model("Student", StudentSchema);