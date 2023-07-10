import { z } from "zod"
import { CreateProductSchema } from "./CreateProductSchema"

export type CreateProductRequestDTO = z.infer<typeof CreateProductSchema>