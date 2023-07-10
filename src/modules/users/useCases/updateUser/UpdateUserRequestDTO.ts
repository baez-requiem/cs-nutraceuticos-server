import { z } from "zod"
import { UpdateUserSchema } from "./UpdateUserSchema"

export type UpdateUserRequestDTO = z.infer<typeof UpdateUserSchema>