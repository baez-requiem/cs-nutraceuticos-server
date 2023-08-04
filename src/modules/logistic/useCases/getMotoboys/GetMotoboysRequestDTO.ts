import { z } from "zod"
import { GetMotoboysSchema } from "./GetMotoboysSchema"

export type GetMotoboysDTO = z.infer<typeof GetMotoboysSchema>