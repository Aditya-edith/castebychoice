import express from 'express';
import { addUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

// Route to add a new user
router.post('/add', addUser);

// Route to get all users
router.get('/', getUsers);  

export default router;
