import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class NoteController {
  async create(req: Request, res: Response): Promise<Response> {
    const { taskId } = req.params;
    const { content } = req.body;

    try {
      const note = await prisma.note.create({
        data: {
          content,
          taskId,
        },
      });
      return res.status(201).json(note);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create note' });
    }
  }

  async findByTaskId(req: Request, res: Response): Promise<Response> {
    const { taskId } = req.params;

    try {
      const notes = await prisma.note.findMany({
        where: { taskId },
      });
      return res.status(200).json(notes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch notes' });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(`Looking for note with ID: ${id}`);

    try {
      const note = await prisma.note.findUnique({
        where: { id },
      });

      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }

      return res.status(200).json(note);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch note' });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { content } = req.body;

    try {
      const updatedNote = await prisma.note.update({
        where: { id },
        data: { content },
      });

      return res.status(200).json(updatedNote);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update note' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await prisma.note.delete({
        where: { id },
      });

      return res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete note' });
    }
  }
}
