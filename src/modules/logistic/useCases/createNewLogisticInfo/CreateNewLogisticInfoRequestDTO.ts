import { z } from "zod"
import { CreateNewLogisticInfoSchema } from "./CreateNewLogisticInfoSchema"

export type CreateNewLogisticInfoRequestDTO = z.infer<typeof CreateNewLogisticInfoSchema>