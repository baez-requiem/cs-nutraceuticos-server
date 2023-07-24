import { z } from "zod"
import { onlyNumbers } from "../../../../utils/number"

export const CreateUserSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  username: z.string().nonempty('Usuário é obrigatório'),
  password: z.string().nonempty('Senha é obrigatório'),
  initial_date: z.nullable(z.string().transform(val => val ? new Date(val).toISOString() : null)).default(null).optional(),
  active: z.boolean(),
  phone: z.string().nonempty().transform(v => onlyNumbers(v)),
  rg: z.string().optional(),
  cpf: z.string().optional(),
  notes: z.string().optional(),
  cep: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  address: z.string().optional(),
  complement: z.string().optional(),
  roleId: z.string().nonempty(),
  salesTeamId: z.string().nullish().optional(),
})