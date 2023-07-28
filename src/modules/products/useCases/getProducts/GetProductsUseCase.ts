import { client } from '../../../../prisma/client'

class GetProductsUseCase {
  
  async execute() {
    const products = await client.product.findMany({
      orderBy: { id: 'asc' },
      where: { deleted: false }
    })

    return products
  }
}

export { GetProductsUseCase }