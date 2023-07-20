import { z } from "zod"
import { CreateMotoboySchema } from "./CreateMotoboySchema"

export type CreateMotoboyRequestDTO = z.infer<typeof CreateMotoboySchema>