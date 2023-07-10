import { z } from "zod"

export const GetMediasSchema = z.object({
  active: z.enum(['true', 'false']).optional()
})

export type GetMediasDTO = z.infer<typeof GetMediasSchema>