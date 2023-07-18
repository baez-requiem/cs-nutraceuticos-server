import { z } from "zod"
import { CreateNewBatchSchema } from "./CreateNewBatchSchema"

export type CreateNewBatchRequestDTO = z.infer<typeof CreateNewBatchSchema>