import { z } from "zod"

export const CreateRoleSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  description: z.string().optional(),
})

export type CreateRoleSchemaType = z.infer<typeof CreateRoleSchema>