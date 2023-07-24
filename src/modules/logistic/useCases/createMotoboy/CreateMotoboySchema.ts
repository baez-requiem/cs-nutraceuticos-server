import { z } from "zod"
import { onlyNumbers } from "../../../../utils/number"

export const CreateMotoboySchema = z.object({
  name: z.string().nonempty(),
  active: z.boolean().optional(),
  notes: z.string().nullable().optional(),
  phone: z.string().nonempty().transform(v => onlyNumbers(v)),
})