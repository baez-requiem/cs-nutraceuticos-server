import { z } from "zod"

export const CreateProductSchema = z.object({
  name: z.string().nonempty(),
  active: z.boolean().optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
  supply_quantity_notice: z.number().positive().nullable().optional(),
  amount: z.number().positive().gte(0.01)
})