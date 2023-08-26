import { z } from "zod"
import { CreateDistributionCenterSchema } from "./CreateDistributionCenterSchema"

export type CreateDistributionCenterRequestDTO = z.infer<typeof CreateDistributionCenterSchema>