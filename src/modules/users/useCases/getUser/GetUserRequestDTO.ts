import { z } from "zod"
import { GetUserSchema } from "./GetUserSchema"

export type GetUserRequestDTO = z.infer<typeof GetUserSchema>