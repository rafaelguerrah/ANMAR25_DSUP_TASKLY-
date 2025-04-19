import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const router = Router();
const taskController = new TaskController();

router.post('/tasks', (req, res, next) => taskController.create(req, res).catch(next));
router.get('/tasks', taskController.findAll.bind(taskController));
router.get('/tasks/:id', taskController.findById.bind(taskController));
router.get('/tasks/status/:status', taskController.findByStatus.bind(taskController));
router.put('/tasks/:id', taskController.update.bind(taskController));
router.delete('/tasks/:id', taskController.delete.bind(taskController));


export { router as taskRoutes };
