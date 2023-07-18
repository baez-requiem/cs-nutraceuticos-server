import { z } from "zod"

export const DeleteBatchSchema = z.object({
  id: z.string().nonempty()
})