import { z } from "zod"

export const GetMotoboysSchema = z.object({
  active: z.enum(['true', 'false']).optional()
})