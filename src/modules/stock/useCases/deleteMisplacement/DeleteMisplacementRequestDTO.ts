import { z } from "zod"
import { DeleteMisplacementSchema } from "./DeleteMisplacementSchema"

export type DeleteMisplacementRequestDTO = z.infer<typeof DeleteMisplacementSchema>