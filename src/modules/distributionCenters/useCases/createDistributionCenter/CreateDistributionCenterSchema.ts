import { z } from "zod"

export const CreateDistributionCenterSchema = z.object({
  name: z.string().nonempty(),
  id_motoboy: z.string().nonempty().nullable().optional(),
})