import { client } from '../../../../prisma/client'
import { DeleteBatchRequestDTO } from './DeleteBatchRequestDTO'

class DeleteBatchUseCase {
  
  async execute({ id }: DeleteBatchRequestDTO) {

    const batchesProducts = await client.batchesProducts.deleteMany({
      where: { id_batch: id }
    })

    const batch = await client.batch.deleteMany({
      where: { id }
    })

    const ok = !!(batchesProducts.count && batch.count)

    return ok
  }
}

export { DeleteBatchUseCase }