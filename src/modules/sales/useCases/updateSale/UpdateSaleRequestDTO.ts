import { z } from "zod"
import { UpdateSaleSchema } from "./UpdateSaleSchema"

export type UpdateSaleRequestDTO = z.infer<typeof UpdateSaleSchema>