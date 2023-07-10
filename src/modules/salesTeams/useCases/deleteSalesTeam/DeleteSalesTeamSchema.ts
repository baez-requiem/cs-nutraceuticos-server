import { z } from "zod"

export const DeleteSalesTeamSchema = z.object({
  id: z.string().nonempty()
})