import { z } from "zod";
import { AuthenticateUserSchema } from "./AuthenticateUserSchema"

export type AuthenticateUserRequestDTO = z.infer<typeof AuthenticateUserSchema>