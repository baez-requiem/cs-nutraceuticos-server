import { z } from "zod"
import { onlyNumbers } from "../../../../utils/number"

export const UpdateSaleSchema = z.object({
  id: z.string().nonempty(),
  
  name: z.string().nonempty(),
  phone: z.string().nonempty().transform(v => onlyNumbers(v)),

  sales_quantity: z.number().min(1).optional(),

  rg: z.string().optional(),
  cpf: z.string().optional(),
  email: z.string().optional(),

  cep: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  address: z.string().optional(),
  complement: z.string().optional(),

  media_id: z.string().nonempty(),

  payment_types: z.object({
    id_payment_type: z.string().nonempty(),
    amount: z.number().positive(),
    card_installments: z.number().positive().max(10).optional().nullable(),
    paid: z.boolean().optional(),
  }).array().optional(),
  
  discounts: z.number().optional(),
  notes: z.string().optional(),

  products: z.object({
    id_product: z.string().nonempty(),
    quantity: z.number().min(1)
  }).array().optional()
})