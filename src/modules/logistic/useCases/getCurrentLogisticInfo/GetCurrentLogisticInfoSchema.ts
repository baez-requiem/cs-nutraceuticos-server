import { z } from "zod"

export const GetCurrentLogisticInfoSchema = z.object({
  id_sale: z.string()
})