import { z } from "zod"

export const AuthenticateUserSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty()
})