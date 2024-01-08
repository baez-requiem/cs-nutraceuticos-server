import { z } from "zod"
import { startDay } from "../../../../utils/dateUtils"
import dayjs from "dayjs"

export const CreateNewLogisticInfoSchema = z.object({
  id_user: z.string().nonempty(),
  id_sale: z.string().nonempty(),
  id_sale_status: z.string().nonempty(),
  id_delivery_type: z.string().nonempty().nullable(),
  delivery_date: z.nullable(z.string().transform(val => val ? startDay(dayjs(val)).toISOString() : null)).default(null).optional(),
  delivery_time: z.string().optional(),
  id_motoboy: z.string().nullable().transform(val => val || null).optional(),
  delivery_value: z.number(),
  notes: z.string().nullable().optional(),
  tracking_code: z.string().nullable().optional(),
})