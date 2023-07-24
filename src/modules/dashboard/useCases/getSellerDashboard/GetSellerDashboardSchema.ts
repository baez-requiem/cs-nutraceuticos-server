import { z } from "zod"

export const GetSellerDashboardSchema = z.object({
  id_user: z.string().nonempty(),
})