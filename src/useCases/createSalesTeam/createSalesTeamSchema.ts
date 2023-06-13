import { z } from "zod"

export const CreateSalesTeamSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  notes: z.string().optional(),
})

export type CreateSalesTeamSchemaType = z.infer<typeof CreateSalesTeamSchema>