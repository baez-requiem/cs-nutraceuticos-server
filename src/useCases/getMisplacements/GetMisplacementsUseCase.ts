import { client } from '../../prisma/client'

class GetMisplacementsUseCase {
  
  async execute() {
    const misplacements = await client.misplacement.findMany({
      orderBy: { created_at: 'asc' },
      include: { MisplacementProducts: {
        include: { product: { select: { name: true } } }
      } }
    })
    
    const formatedMisplacements = misplacements.map(misplacement => ({
      id: misplacement.id,
      notes: misplacement.notes,
      created_at: misplacement.created_at,
      products: misplacement.MisplacementProducts.map(mp => ({
        id_product: mp.id_product,
        quantity: mp.quantity,
        created_at: mp.created_at,
        name: mp.product.name,
      })),
    }))

    return formatedMisplacements
  }
}

export { GetMisplacementsUseCase }