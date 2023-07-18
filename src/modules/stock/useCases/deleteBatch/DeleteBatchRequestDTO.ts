import { z } from "zod"
import { DeleteBatchSchema } from "./DeleteBatchSchema"

export type DeleteBatchRequestDTO = z.infer<typeof DeleteBatchSchema>