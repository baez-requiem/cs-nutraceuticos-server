import { z } from "zod"
import { UpdateMotoboySchema } from "./UpdateMotoboySchema"

export type UpdateMotoboyRequestDTO = z.infer<typeof UpdateMotoboySchema>