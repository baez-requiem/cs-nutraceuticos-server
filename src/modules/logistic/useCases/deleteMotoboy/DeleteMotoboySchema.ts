import { z } from "zod"

export const DeleteMotoboySchema = z.object({
  id: z.string()
})