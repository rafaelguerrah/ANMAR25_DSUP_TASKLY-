import { z } from 'zod'

export const createNoteSchema = z.object({
  content: z.string().min(1).max(255),
})

export const updateNoteSchema = z.object({
  content: z.string().min(1).max(255),
})
