import { client } from '../../../../prisma/client'

class GetProductsUseCase {
  
  async execute() {
    const products = await client.product.findMany({
      orderBy: { id: 'asc' }
    })

    return products
  }
}

export { GetProductsUseCase }