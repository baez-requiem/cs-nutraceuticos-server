import { z } from "zod"
import { DeleteProductSchema } from "./DeleteProductSchema"

export type DeleteProductRequestDTO = z.infer<typeof DeleteProductSchema>