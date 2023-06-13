import { z } from "zod"

export const UpdateSalesTeamSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório').optional(),
  notes: z.string().optional(),
})

export type UpdateSalesTeamSchemaType = z.infer<typeof UpdateSalesTeamSchema>