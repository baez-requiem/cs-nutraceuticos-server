import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { CreateNewBatchSchema, CreateNewBatchSchemaType } from './createNewBatchSchema'

interface INewBatchRequest extends CreateNewBatchSchemaType {}

class CreateNewBatchUseCase {
  
  async execute(data: INewBatchRequest) {
    const validateData = CreateNewBatchSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data

    const batch = await client.batch.create({
      data: {
        shipping: validData.shipping,
        notes: validData.notes,
        id_user: validData.id_user,
      }
    })

    const dataBatchesProducts = validData.products.map(bp => ({...bp, id_batch: batch.id }))

    const batchesProducts = await client.batchesProducts.createMany({
      data: dataBatchesProducts
    })
    
    return batch
  }
}

export { CreateNewBatchUseCase }