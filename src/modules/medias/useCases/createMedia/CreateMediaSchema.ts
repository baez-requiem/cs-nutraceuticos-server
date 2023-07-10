import { z } from "zod"

export const CreateMediaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  notes: z.string().optional(),
  active: z.boolean().optional().default(false),
})