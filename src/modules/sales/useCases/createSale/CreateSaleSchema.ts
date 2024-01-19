import { z } from "zod"
import { onlyNumbers } from "../../../../utils/number"
import { startDay } from "../../../../utils/dateUtils"
import dayjs from "dayjs"

export const CreateSaleSchema = z.object({
  id_user: z.string().nonempty(),
  id_sales_team: z.string().nonempty().nullable().optional(),
  
  name: z.string().nonempty(),
  phone: z.string().nonempty().transform(v => onlyNumbers(v)),

  sales_quantity: z.number().min(1),

  rg: z.string().optional(),
  cpf: z.string().optional(),
  email: z.string().optional(),

  cep: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  address: z.string().optional(),
  address_number: z.string().optional(),
  complement: z.string().optional(),

  media_id: z.string().nonempty(),

  id_delivery_type: z.string().nonempty().nullable(),
  delivery_date: z.nullable(z.string().transform(val => val ? startDay(dayjs(val)).toISOString() : null)).default(null).optional(),
  delivery_time: z.string().optional(),

  payment_types: z.object({
    id_payment_type: z.string().nonempty(),
    amount: z.number().positive(),
    card_installments: z.number().positive().max(10).optional().nullable(),
    paid: z.boolean().optional(),
  }).array(),
  
  discounts: z.number(),
  notes: z.string().optional(),

  products: z.object({
    id_product: z.string().nonempty(),
    quantity: z.number().min(1)
  }).array()
})