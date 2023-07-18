import { z } from "zod"

export const RefreshTokenUserSchema = z.object({
  refresh_token: z.string().nonempty()
})