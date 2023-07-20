import { z } from "zod"

export const CreateMotoboySchema = z.object({
  name: z.string().nonempty(),
  active: z.boolean().optional(),
  notes: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
})