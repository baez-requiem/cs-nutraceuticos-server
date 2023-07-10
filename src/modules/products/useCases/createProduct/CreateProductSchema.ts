import { z } from "zod"

export const CreateProductSchema = z.object({
  name:         z.string({ required_error: 'Nome é obrigatório' }).nonempty('Nome é obrigatório'),
  active:       z.boolean().optional().default(false),
  description:  z.string().optional(),
  notes:        z.string().optional(),
  supply_quantity_notice:        z.number().positive().optional(),
  amount:       z.number({ required_error: 'Valor é obrigatório' }).positive().gte(0.01)
})