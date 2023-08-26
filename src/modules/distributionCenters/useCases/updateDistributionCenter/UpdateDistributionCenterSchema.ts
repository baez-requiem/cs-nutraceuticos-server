import { z } from "zod"

export const UpdateDistributionCenterSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty().optional(),
  supply_quantity_notice: z.object({
    id_product: z.string().nonempty(),
    quantity: z.number().nonnegative(),
  }).array().optional()
})