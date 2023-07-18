import { z } from "zod"
import { UpdateBatchSchema } from "./UpdateBatchSchema"

export type UpdateBatchRequestDTO = z.infer<typeof UpdateBatchSchema>