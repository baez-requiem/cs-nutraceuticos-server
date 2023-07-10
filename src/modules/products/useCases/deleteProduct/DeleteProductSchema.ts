import { z } from "zod"

export const DeleteProductSchema = z.object({
  id: z.string()
})