import { z } from "zod"

export const CreateUserSchema = z.object({
  name:         z.string({ required_error: 'Nome é obrigatório' }).nonempty('Nome é obrigatório'),
  username:     z.string({ required_error: 'Usuário é obrigatório' }).nonempty('Usuário é obrigatório'),
  password:     z.string({ required_error: 'Senha é obrigatório' }).nonempty('Senha é obrigatório'),
  active:       z.boolean().optional().default(false),
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
  roleId:       z.string().optional().default(''),
  salesTeamId:  z.string().optional().default('').transform(val => val || null),
})

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>