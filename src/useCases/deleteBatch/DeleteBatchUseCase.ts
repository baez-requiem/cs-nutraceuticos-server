import { client } from '../../prisma/client'

interface IBatchRequest {
  id: string
}

class DeleteBatchUseCase {
  
  async execute({ id }: IBatchRequest) {
    if (!id) {
      throw new Error("Informe o id do lote!")
    }

    await client.batchesProducts.deleteMany({
      where: { id_batch: id }
    })

    await client.batch.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteBatchUseCase }