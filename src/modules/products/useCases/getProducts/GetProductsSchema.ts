import { z } from "zod"

export const GetProductsSchema = z.object({
  active: z.enum(['true', 'false']).optional(),
})