import { z } from "zod"

export const DeleteMediasSchema = z.object({
  id: z.string()
})