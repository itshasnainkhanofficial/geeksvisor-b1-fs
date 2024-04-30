import {Staff} from '../models/Staff.js'

// // Add Staff
export const AddStaff =  async (req, res, next) => {
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
        next(error)
      }
}

// Get All Staffs
export const GetStaffs = async (req, res, next) => {
      try {
        const staffs = await Staff.find()
        
        if(staffs.length === 0){
          return res.json({ msg: "Staff not found" });
        }
        
        return res.status(200).json(staffs);
    
      } catch (error) {
        next(error)
      }
    }


// Get Single Staff
export const GetSingleStaff = async (req, res, next) => {

      try {
        const id = req.params.id
        const SingleStaff = await Staff.findById(id);
        console.log(SingleStaff)
        if (!SingleStaff) {
          return res.status(404).json({ msg: "No staff found" })
        }
      
        return res.status(200).json(SingleStaff);
      } catch (error) {
        next(error)
      }
    }

// Update a Staff
export const UpdateStaff = async (req, res, next) => {
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
        next(error)
    }
    }

// Delete a Staff
export const DeleteStaff = async (req, res, next) => {
      try {
        const id = req.params.id
        const staffToDelete = await Staff.findOneAndDelete({ _id: id });
        
        if (!staffToDelete) {
          return res.status(404).json({ msg: "staff not found" })
        }
      
        return res.status(200).json({ msg: "staff deleted", });
      } catch (error) {
        next(error)
      }
    }