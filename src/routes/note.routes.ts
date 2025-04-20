import { Router } from "express";
import { NoteController } from "../controllers/note.controller";

const router = Router();
const noteController = new NoteController();

router.post('/:taskId/notes', (req, res, next) =>{
    noteController.create(req, res).catch(next);
})

router.get('/:taskId/notes', (req, res, next) => {
    noteController.findByTaskId(req, res).catch(next);
  });

router.get('/notes/:id', (req, res, next) =>{
    noteController.findById(req, res).catch(next)
})

router.put('/notes/:id', (req, res, next) =>{
    noteController.update(req, res).catch(next)
})

router.delete('/notes/:id', (req, res, next) =>{
    noteController.delete(req, res).catch(next)
})

export default router;



