import { z } from "zod"

export const UpdateMotoboySchema = z.object({
  id: z.string().nonempty(),
  name: z.string().optional(),
  active: z.boolean().optional(),
  notes: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
})