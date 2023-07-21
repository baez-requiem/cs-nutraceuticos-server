import { z } from "zod"
import { endDay, startDay } from "../../../../utils/dateUtils"

import dayjs from "dayjs"

export const GetSalesSchema = z.object({
  init_date: z.nullable(z.string().transform(val => val ? startDay(dayjs(val)).toISOString() : null)).default(null).optional(),
  end_date: z.nullable(z.string().transform(val => val ? endDay(dayjs(val)).toISOString() : null)).default(null).optional(),

  status: z.string().nonempty().optional(),
  seller: z.string().nonempty().optional(),

  client_name: z.string().nonempty().optional(),
  client_phone: z.string().nonempty().optional(),
})