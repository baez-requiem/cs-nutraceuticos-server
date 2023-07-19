import { z } from "zod"
import { CreateMisplacementSchema } from "./CreateMisplacementSchema"

export type CreateMisplacementRequestDTO = z.infer<typeof CreateMisplacementSchema>