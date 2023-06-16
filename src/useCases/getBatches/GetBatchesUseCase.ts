import { client } from '../../prisma/client'

class GetBatchesUseCase {
  
  async execute() {
    const batches = await client.batch.findMany({
      orderBy: { created_at: 'asc' },
      include: { BatchesProducts: {
        include: { product: { select: { name: true } } }
      } }
    })

    return batches
  }
}

export { GetBatchesUseCase }