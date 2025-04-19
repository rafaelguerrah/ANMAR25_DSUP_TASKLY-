import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const router = Router();
const taskController = new TaskController();

router.post('/', (req, res, next) => {
  taskController.create(req, res).catch(next);
});

router.get('/', (req, res, next) => {
  taskController.findAll(req, res).catch(next);
});

router.get('/:id', (req, res, next) => {
  taskController.findById(req, res).catch(next);
});

router.get('/status/:status', (req, res, next) => {
  taskController.findByStatus(req, res).catch(next);
});

router.put('/:id', (req, res, next) => {
  taskController.update(req, res).catch(next);
});

router.delete('/:id', (req, res, next) => {
  taskController.delete(req, res).catch(next);
});

export default router;
