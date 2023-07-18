import { client } from "../../../../prisma/client"
import { UpdateBatchRequestDTO } from "./UpdateBatchRequestDTO"

class UpdateBatchUseCase {

  async execute({ id, products, ...data }: UpdateBatchRequestDTO) {

    const batch = await client.batch.update({
      where: { id },
      data: {
        shipping: data.shipping,
        notes: data.notes,
        updated_at: new Date().toISOString()
      }
    })

    if (products) {
      const dataBatchesProducts = products.map(bp => ({ ...bp, id_batch: batch.id }))
  
      await client.batchesProducts.deleteMany({
        where: { id_batch: id }
      })
  
      await client.batchesProducts.createMany({
        data: dataBatchesProducts
      })
    }

    return !!batch.id
  }
}

export { UpdateBatchUseCase }