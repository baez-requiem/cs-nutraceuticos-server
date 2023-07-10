import { z } from "zod"

export const CreateSalesTeamSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  notes: z.string().optional(),
})
