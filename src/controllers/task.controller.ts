import { Request, Response } from 'express';

export class TaskController {
  async create(req: Request, res: Response): Promise<Response> {
    return res.status(201).json({ message: 'Task created' });
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'All tasks' });
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    return res.status(200).json({ message: `Task ${id}` });
  }

  async findByStatus(req: Request, res: Response): Promise<Response> {
    const { status } = req.params;
    return res.status(200).json({ message: `Tasks with status ${status}` });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    return res.status(200).json({ message: `Task ${id} updated` });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    return res.status(204).send();
  }
}

