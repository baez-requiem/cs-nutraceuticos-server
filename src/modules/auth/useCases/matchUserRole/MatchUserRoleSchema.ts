import { z } from "zod"

export const MatchUserRoleSchema = z.object({
  id_user: z.string().nonempty(),
  roles: z.string().nonempty().array()
})