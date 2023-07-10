import { z } from "zod"
import { UpdateMediaSchema } from "./UpdateMediaSchema";

export type UpdateMediaRequestDTO = z.infer<typeof UpdateMediaSchema>