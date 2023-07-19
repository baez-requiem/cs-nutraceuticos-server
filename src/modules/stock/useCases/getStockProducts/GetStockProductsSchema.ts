import { z } from "zod"

export const GetStockProductsSchema = z.object({
  active: z.enum(['true', 'false']).optional(),
  in_stock: z.enum(['true', 'false']).optional(),
})