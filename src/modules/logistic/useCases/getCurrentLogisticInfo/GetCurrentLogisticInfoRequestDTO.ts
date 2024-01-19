import { z } from "zod"
import { GetCurrentLogisticInfoSchema } from "./GetCurrentLogisticInfoSchema"

export type GetCurrentLogisticInfoRequestDTO = z.infer<typeof GetCurrentLogisticInfoSchema>