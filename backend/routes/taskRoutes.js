import express from 'express';
import {
  getTasks, createTask, updateTask, deleteTask, rateTask, getTaskSummary
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/rate', rateTask);
router.get('/summary', getTaskSummary);

export default router;
