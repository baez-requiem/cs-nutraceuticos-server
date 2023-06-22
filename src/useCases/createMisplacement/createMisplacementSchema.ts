import { z } from "zod"

export const CreateMisplacementSchema = z.object({
  id_user: z.string(),
  notes: z.string().optional(),
  products: z.object({
    id_product: z.string(),
    quantity: z.number({ required_error: 'Quantidade é obrigatório' }).min(1)
  }).array()
})

export type CreateMisplacementSchemaType = z.infer<typeof CreateMisplacementSchema>