import { z } from "zod"
import { UpdateProductSchema } from "./updateProductSchema"

export type UpdateProductRequestDTO = z.infer<typeof UpdateProductSchema>