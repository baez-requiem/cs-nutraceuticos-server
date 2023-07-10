import { z } from "zod";
import { CreateMediaSchema } from "./CreateMediaSchema"

export type CreateMediaRequestDTO = z.infer<typeof CreateMediaSchema>