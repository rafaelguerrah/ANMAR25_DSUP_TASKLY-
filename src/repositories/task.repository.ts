import  prisma  from '../database/prisma';

interface PaginationParams {
  page: number
  limit: number
}

export class TaskRepository {
  async create(data: any) {
    return prisma.task.create({ data })
  }

  async findAll({ page, limit }: PaginationParams) {
    const skip = (page - 1) * limit
    const tasks = await prisma.task.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    })
    return tasks
  }

  async findById(id: string) {
    return prisma.task.findUnique({ where: { id } })
  }

  async findByStatus(status: string) {
    return prisma.task.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
    })
  }

  async update(id: string, data: any) {
    return prisma.task.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    return prisma.task.delete({ where: { id } })
  }
}
