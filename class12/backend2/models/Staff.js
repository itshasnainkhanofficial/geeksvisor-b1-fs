import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const StaffSchema  = new Schema(
  {
    name: String,
    role: String,
    cnic: Number
  }
);

export const Staff = mongoose.model("Staff", StaffSchema);