import { z } from "zod"
import { DeleteMediasSchema } from "./DeleteMediaSchema"

export type DeleteMediaRequestDTO = z.infer<typeof DeleteMediasSchema>