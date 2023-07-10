import { z } from "zod"
import { UpdateSalesTeamSchema } from "./UpdateSalesTeamSchema"

export type UpdateSalesTeamRequestDTO = z.infer<typeof UpdateSalesTeamSchema>