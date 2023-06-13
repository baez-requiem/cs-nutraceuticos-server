import { z } from "zod"

export const UpdateUserSchema = z.object({
  name:         z.string().nonempty('Nome é obrigatório').optional(),
  username:     z.string().nonempty('Usuário é obrigatório').optional(),
  password:     z.string().optional(),
  active:       z.boolean().optional(),
  phone:        z.string().optional(),
  rg:           z.string().optional(),
  cpf:          z.string().optional(),
  notes:        z.string().optional(),
  initial_date: z.coerce.date().nullable().optional().transform(val => val ? new Date(val).toISOString() : null),
  cep:          z.string().optional(),
  state:        z.string().optional(),
  city:         z.string().optional(),
  neighborhood: z.string().optional(),
  address:      z.string().optional(),
  complement:   z.string().optional(),
  roleId:       z.string().optional(),
  salesTeamId:  z.string().nullable().optional()
})

export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>