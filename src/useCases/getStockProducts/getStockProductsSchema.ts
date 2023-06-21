import { z } from "zod"

const activeSchema = z.union([
  z.literal('true'),
  z.literal('false'),
]).transform(val => {
  if (val === 'true') return true
  if (val === 'false') return false
  return null
}).optional()

export const GetStockProductsSchema = z.object({
  active: activeSchema,
  in_stock: z.boolean().optional(),
})

export type GetStockProductsSchemaType = z.infer<typeof GetStockProductsSchema>