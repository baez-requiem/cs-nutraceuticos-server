import { z } from "zod"

export const UpdateMediaSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
  active: z.boolean().optional(),
})