import { client } from '../../../../prisma/client'

class GetBatchesUseCase {
  
  async execute() {
    const batches = await client.batch.findMany({
      orderBy: { created_at: 'asc' },
      include: { BatchesProducts: {
        include: { product: { select: { name: true } } }
      } }
    })
    
    const formatedBatches = batches.map(batch => ({
      id: batch.id,
      notes: batch.notes,
      shipping: batch.shipping,
      created_at: batch.created_at,
      updated_at: batch.updated_at,
      products: batch.BatchesProducts.map(bp => ({
        id_product: bp.id_product,
        quantity: bp.quantity,
        unit_amount: bp.unit_amount,
        created_at: bp.created_at,
        name: bp.product.name,
      })),
    }))

    return formatedBatches
  }
}

export { GetBatchesUseCase }