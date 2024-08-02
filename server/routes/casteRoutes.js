import express from 'express';
import { addCasteData, getCasteData } from '../controllers/casteController.js';

const router = express.Router();

// Route to add new caste data
router.post('/add', addCasteData);

// Route to get all caste data
router.get('/', getCasteData);

export default router;
