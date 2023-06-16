import { z } from "zod"

export const UpdateBatchSchema = z.object({
  notes:        z.string().optional(),
  shipping:     z.number().min(0).optional(),
  products: z.object({
    id_product: z.string(),
    quantity: z.number({ required_error: 'Quantidade é obrigatório' }).min(1),
    unit_amount: z.number({ required_error: 'Valor é obrigatório' }).positive().gte(0.01)
  }).array()
})

export type UpdateBatchSchemaType = z.infer<typeof UpdateBatchSchema>