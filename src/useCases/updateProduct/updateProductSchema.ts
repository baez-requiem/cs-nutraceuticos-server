import { z } from "zod"

export const UpdateProductSchema = z.object({
  name:         z.string({ required_error: 'Nome é obrigatório' }).nonempty('Nome é obrigatório').optional(),
  active:       z.boolean().optional(),
  description:  z.string().optional(),
  notes:        z.string().optional(),
  supply_quantity_notice:        z.number().positive().optional(),
  amount: z.number({ required_error: 'Valor é obrigatório' }).positive().gte(0.01).optional()
})

export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>