import { z } from 'zod';

export const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']).optional(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
    category: z.string().optional()
})