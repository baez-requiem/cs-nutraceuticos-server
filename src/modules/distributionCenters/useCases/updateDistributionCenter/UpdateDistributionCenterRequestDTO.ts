import { z } from "zod"
import { UpdateDistributionCenterSchema } from "./UpdateDistributionCenterSchema"

export type UpdateDistributionCenterRequestDTO = z.infer<typeof UpdateDistributionCenterSchema>