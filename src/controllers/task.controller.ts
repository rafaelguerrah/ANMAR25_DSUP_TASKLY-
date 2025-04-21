import { Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class TaskController {
  async create(req: Request, res: Response): Promise<Response> {

    const { title, description, status } = req.body;

    if (!title || !description || !status) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
    try {
      const task = await prisma.task.create({
        data: {
          title,
          description,
          status,
        },
      });
      return res.status(201).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create task' });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await prisma.task.findMany();
      return res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    
    try {
      const task = await prisma.task.findUnique({
        where: { id },
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch task' });
    }
  }

  async findByStatus(req: Request, res: Response): Promise<Response> {
    const { status } = req.params;
    try {
      const tasks = await prisma.task.findMany({
        where: { status },
      });
      return res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch tasks by status' });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
      const task = await prisma.task.update({
        where: { id },
        data: { title, description, status },
      });
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await prisma.task.delete({
        where: { id },
      });
      return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}
