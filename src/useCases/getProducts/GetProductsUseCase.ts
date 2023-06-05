import { client } from '../../prisma/client'

class GetProductsUseCase {
  
  async execute() {
    const products = client.product.findMany()

    return products
  }
}

export { GetProductsUseCase }