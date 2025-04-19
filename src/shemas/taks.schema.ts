import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
  status: z.enum(['Todo', 'In Progress', 'Done']).optional(),
  priority: z.number().min(1).max(5),
  category: z.string().min(1).max(50),
})

export const updateTaskSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().min(1).max(255).optional(),
  status: z.enum(['Todo', 'In Progress', 'Done']).optional(),
  priority: z.number().min(1).max(5).optional(),
  category: z.string().min(1).max(50).optional(),
})
