import { z } from "zod"

export const UpdateProductSchema = z.object({
  id: z.string().nonempty(),

  name: z.string().nonempty().optional(),
  active: z.boolean().optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
  amount: z.number().positive().gte(0.01).optional()
})