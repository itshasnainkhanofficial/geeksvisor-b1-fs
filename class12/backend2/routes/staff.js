import express from 'express'
import { AddStaff, GetStaffs, GetSingleStaff, UpdateStaff, DeleteStaff } from '../controllers/Staff.js'
const router = express.Router()

// Add a Staff
router.post('/', AddStaff )

// Get All Staffs
router.get('/', GetStaffs)

// Get Single Staff
router.get('/:id', GetSingleStaff )

// Update Staff
router.put('/:id', UpdateStaff)

// // Delete Staff
router.delete('/:id', DeleteStaff)

export default router