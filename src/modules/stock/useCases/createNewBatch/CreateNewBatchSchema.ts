import { z } from "zod"

export const CreateNewBatchSchema = z.object({
  id_user: z.string().nonempty(),
  shipping: z.number().nonnegative().transform(v => v || 0),
  notes: z.string().optional(),
  products: z.object({
    id_product: z.string(),
    quantity: z.number().min(1),
    unit_amount: z.number().positive().gte(0.01)
  }).array()
})