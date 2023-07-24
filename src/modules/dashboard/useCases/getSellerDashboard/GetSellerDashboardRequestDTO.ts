import { z } from "zod"
import { GetSellerDashboardSchema } from "./GetSellerDashboardSchema"

export type GetSellerDashboardRequestDTO = z.infer<typeof GetSellerDashboardSchema>