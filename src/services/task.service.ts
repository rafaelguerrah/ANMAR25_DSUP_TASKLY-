import { TaskRepository } from '../repositories/task.repository'
import { z } from 'zod'

const taskSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(500),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']),
})

export class TaskService {
  private repository = new TaskRepository()

  async create(data: any) {
    const validated = taskSchema.parse(data)
    return this.repository.create(validated)
  }

  async findAll(query: any) {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    return this.repository.findAll({ page, limit })
  }

  async findById(id: string) {
    return this.repository.findById(id)
  }

  async findByStatus(status: string) {
    return this.repository.findByStatus(status)
  }

  async update(id: string, data: any) {
    const validated = taskSchema.partial().parse(data)
    return this.repository.update(id, validated)
  }

  async delete(id: string) {
    return this.repository.delete(id)
  }
}
