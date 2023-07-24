import { z } from "zod"

export const GetUserSchema = z.object({
  active: z.enum(['true', 'false']).optional(),
  user_role: z.string().optional()
})