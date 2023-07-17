import { z } from "zod";
import { MatchUserRoleSchema } from "./MatchUserRoleSchema"

export type MatchUserRoleRequestDTO = z.infer<typeof MatchUserRoleSchema>