import { z } from "zod"

export const GetStockProductsSchema = z.object({
  active:       z.boolean().optional(),
  in_stock:       z.boolean().optional(),
})

export type GetStockProductsSchemaType = z.infer<typeof GetStockProductsSchema>