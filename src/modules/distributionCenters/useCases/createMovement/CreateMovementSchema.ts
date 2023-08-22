import { z } from "zod"

export const CreateMovementSchema = z.object({
  id_distribution_center: z.string().nonempty(),
  id_distribution_center_rel: z.string().nonempty().optional(),
  operation: z.enum(['IN', 'OUT', 'TRANSFER_IN', 'TRANSFER_OUT']),
  products: z.object({
    id: z.string().nonempty(),
    quantity: z.number().nonnegative(),
  }).array()
})