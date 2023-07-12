import { z } from "zod"
import { CreateSaleSchema } from "./CreateSaleSchema"

export type CreateSaleRequestDTO = z.infer<typeof CreateSaleSchema>