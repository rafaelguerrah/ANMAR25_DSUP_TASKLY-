import { prisma } from '../database/prisma'

export class NoteRepository {
  async create(data: { content: string, taskId: string }) {
    return prisma.note.create({ data })
  }

  async findByTaskId(taskId: string) {
    return prisma.note.findMany({
      where: { taskId },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findById(id: string) {
    return prisma.note.findUnique({
      where: { id },
    })
  }

  async update(id: string, data: { content: string }) {
    return prisma.note.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    return prisma.note.delete({
      where: { id },
    })
  }
}
