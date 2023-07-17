import { z } from "zod"

export const UpdateSaleSchema = z.object({
  id: z.string().nonempty(),
  
  name: z.string().nonempty(),
  phone: z.string().nonempty(),

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