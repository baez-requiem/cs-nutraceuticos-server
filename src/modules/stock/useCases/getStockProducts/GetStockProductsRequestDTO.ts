import { z } from "zod"
import { GetStockProductsSchema } from "./GetStockProductsSchema"

export type GetStockProductsRequestDTO = z.infer<typeof GetStockProductsSchema>