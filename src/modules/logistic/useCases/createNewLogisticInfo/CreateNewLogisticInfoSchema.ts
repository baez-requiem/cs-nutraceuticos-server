import { z } from "zod"

export const CreateNewLogisticInfoSchema = z.object({
  id_user: z.string().nonempty(),
  id_sale: z.string().nonempty(),
  id_sale_status: z.string().nonempty(),
  id_delivery_type: z.string().nonempty(),
  delivery_date: z.nullable(z.string().transform(val => val ? new Date(val).toISOString() : null)).default(null).optional(),
  id_motoboy: z.string().nonempty().optional(),
  delivery_value: z.number(),
  notes: z.string().optional(),
})