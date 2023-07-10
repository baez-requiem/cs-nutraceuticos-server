import { z } from "zod"
import { CreateSalesTeamSchema } from "./CreateSalesTeamSchema"

export type CreateSalesTeamRequestDTO = z.infer<typeof CreateSalesTeamSchema>