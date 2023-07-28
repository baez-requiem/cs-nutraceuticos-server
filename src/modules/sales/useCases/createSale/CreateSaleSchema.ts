import { z } from "zod"
import { onlyNumbers } from "../../../../utils/number"

export const CreateSaleSchema = z.object({
  id_user: z.string().nonempty(),
  id_sales_team: z.string().nonempty().nullable().optional(),
  
  name: z.string().nonempty(),
  phone: z.string().nonempty().transform(v => onlyNumbers(v)),

  card_installments: z.number().positive().max(10).optional().nullable(),
  paid: z.boolean().optional(),

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
  payment_type_id: z.string().nonempty(),
  
  discounts: z.number().default(0),
  notes: z.string().optional(),

  products: z.object({
    id_product: z.string().nonempty(),
    sales_quantity: z.number().min(1),
    quantity: z.number().min(1)
  }).array()
})