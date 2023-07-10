import { z } from "zod"
import { DeleteUserSchema } from "./DeleteUserSchema"

export type DeleteUserRequestDTO = z.infer<typeof DeleteUserSchema>