import { z } from "zod"
import { DeleteSalesTeamSchema } from "./DeleteSalesTeamSchema"

export type DeleteSalesTeamRequestDTO = z.infer<typeof DeleteSalesTeamSchema>