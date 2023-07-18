import { client } from '../../../../prisma/client'
import { CreateNewBatchRequestDTO } from './CreateNewBatchRequestDTO'

class CreateNewBatchUseCase {
  
  async execute(request: CreateNewBatchRequestDTO) {
    const { products, ...data } = request

    const batch = await client.batch.create({ data })

    const dataBatchesProducts = products.map(bp => ({...bp, id_batch: batch.id }))

    const batchesProducts = await client.batchesProducts.createMany({
      data: dataBatchesProducts
    })

    const ok = !!(batch && batchesProducts.count)
    
    return ok
  }
}

export { CreateNewBatchUseCase }