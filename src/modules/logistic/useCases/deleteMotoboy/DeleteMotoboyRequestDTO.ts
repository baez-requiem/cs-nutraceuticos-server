import { z } from "zod"
import { DeleteMotoboySchema } from "./DeleteMotoboySchema"

export type DeleteMotoboyRequestDTO = z.infer<typeof DeleteMotoboySchema>