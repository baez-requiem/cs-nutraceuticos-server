import { z } from "zod"

export const UpdateProductSchema = z.object({
  id: z.string(),
  name:         z.string().nonempty('Nome é obrigatório').optional(),
  active:       z.boolean().optional(),
  description:  z.string().optional(),
  notes:        z.string().optional(),
  supply_quantity_notice:        z.number().positive().optional(),
  amount: z.number({ required_error: 'Valor é obrigatório' }).positive().gte(0.01).optional()
})