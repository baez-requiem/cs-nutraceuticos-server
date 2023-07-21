import { z } from "zod"
import { GetSalesSchema } from "./GetSalesSchema"

export type GetSalesRequestDTO = z.infer<typeof GetSalesSchema>