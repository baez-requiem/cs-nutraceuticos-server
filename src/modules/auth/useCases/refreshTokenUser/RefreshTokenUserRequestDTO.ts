import { z } from "zod"
import { RefreshTokenUserSchema } from "./RefreshTokenUserSchema"

export type RefreshTokenUserRequestDTO = z.infer<typeof RefreshTokenUserSchema>