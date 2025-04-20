import { NoteRepository } from '../repositories/note.repository'
import { z } from 'zod'

const noteSchema = z.object({
  content: z.string().min(1).max(1000),
  taskId: z.string().uuid(),
})

export class NoteService {
  private repository = new NoteRepository()

  async create(data: any) {
    const validated = noteSchema.parse(data)
    return this.repository.create(validated)
  }

  async findByTaskId(taskId: string) {
    return this.repository.findByTaskId(taskId)
  }

  async findById(id: string) {
    return this.repository.findById(id)
  }

  async update(id: string, data: any) {
    const validated = z.object({ content: z.string().min(1).max(1000) }).parse(data)
    return this.repository.update(id, validated)
  }

  async delete(id: string) {
    return this.repository.delete(id)
  }
}
