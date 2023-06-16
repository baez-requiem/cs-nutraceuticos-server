import { client } from "../../prisma/client";
import { formatErrorsZod } from "../../utils/zod.utils";
import { UpdateBatchSchemaType, UpdateBatchSchema } from "./updateBatchSchema";

interface IUpdateBatchRequest extends UpdateBatchSchemaType {
  id: string
}

class UpdateBatchUseCase {

  async execute({ id, ...data }: IUpdateBatchRequest) {
    const validateData = UpdateBatchSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data

    const batch = await client.batch.update({
      where: { id },
      data: {
        shipping: validData.shipping,
        notes: validData.notes,
        updated_at: new Date().toISOString()
      }
    })

    const dataBatchesProducts = validData.products.map(bp => ({ ...bp, id_batch: batch.id }))

    await client.batchesProducts.deleteMany({
      where: { id_batch: id }
    })

    await client.batchesProducts.createMany({
      data: dataBatchesProducts
    })

    return batch
  }
}

export { UpdateBatchUseCase }