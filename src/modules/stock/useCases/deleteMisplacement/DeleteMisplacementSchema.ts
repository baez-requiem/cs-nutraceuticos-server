import { z } from "zod"

export const DeleteMisplacementSchema = z.object({
  id: z.string().nonempty()
})