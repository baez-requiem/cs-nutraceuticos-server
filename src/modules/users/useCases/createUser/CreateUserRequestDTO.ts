import { z } from "zod"
import { CreateUserSchema } from "./CreateUserSchema"

export type CreateUserRequestDTO = z.infer<typeof CreateUserSchema>