import { z } from "zod"

export const UpdateUserSchema = z.object({
  id: z.string().nonempty(),
  name:         z.string().nonempty().optional(),
  username:     z.string().nonempty().optional(),
  password:     z.string().transform(val => val || undefined).optional(),
  initial_date: z.nullable(z.string().transform(val => val ? new Date(val).toISOString() : null)).default(null).optional(),
  active:       z.boolean().optional(),
  phone:        z.string().optional(),
  rg:           z.string().optional(),
  cpf:          z.string().optional(),
  notes:        z.string().optional(),
  cep:          z.string().optional(),
  state:        z.string().optional(),
  city:         z.string().optional(),
  neighborhood: z.string().optional(),
  address:      z.string().optional(),
  complement:   z.string().optional(),
  roleId:       z.string().nonempty(),
  salesTeamId: z.string().nullish().optional(),
})