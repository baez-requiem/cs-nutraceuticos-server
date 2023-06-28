import { z } from "zod"

const boolOptionalSchema = z.union([
  z.literal('true'),
  z.literal('false'),
]).transform(val => {
  if (val === 'true') return true
  if (val === 'false') return false
  return null
}).optional()

export const GetStockProductsSchema = z.object({
  active: boolOptionalSchema,
  in_stock: boolOptionalSchema,
})

export type GetStockProductsSchemaType = z.infer<typeof GetStockProductsSchema>