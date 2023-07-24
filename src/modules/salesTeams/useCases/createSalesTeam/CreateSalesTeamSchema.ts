import { z } from "zod"

export const CreateSalesTeamSchema = z.object({
  name: z.string().nonempty(),
  notes: z.string().optional(),
})
