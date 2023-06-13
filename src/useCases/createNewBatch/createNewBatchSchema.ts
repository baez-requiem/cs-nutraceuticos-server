import { z } from "zod"

export const CreateNewBatchSchema = z.object({
  notes:        z.string().optional(),
  shipping:     z.number({ required_error: 'Valor é obrigatório' }).min(0).default(0),
  products: z.object({
    id_product: z.string(),
    quantity: z.number({ required_error: 'Quantidade é obrigatório' }).min(1),
    unit_amount: z.number({ required_error: 'Valor é obrigatório' }).positive().gte(0.01)
  }).array()
})

export type CreateNewBatchSchemaType = z.infer<typeof CreateNewBatchSchema>