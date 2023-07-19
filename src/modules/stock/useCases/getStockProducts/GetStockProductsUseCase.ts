import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetStockProductsRequestDTO } from './GetStockProductsRequestDTO'

class GetStockProductsUseCase {
  
  async execute(request: GetStockProductsRequestDTO) {

    const whereProducts: Prisma.ProductWhereInput = {}

    if (request?.active) {
      whereProducts.active = request.active == 'true'
    }

    const products = await client.product.findMany({
      where: whereProducts,
      orderBy: { name: 'asc' },
      include: {
        BatchesProducts: true,
        MisplacementProducts: true,
        SaleProducts: true
      }
    })

    const productsWithTotal = products.map(product => {
      const { BatchesProducts, MisplacementProducts, SaleProducts, ...data } = product

      const batchProductQuantity = BatchesProducts.reduce((pv, cv) => pv + cv.quantity,0)
      const misplacementProductQuantity = MisplacementProducts.reduce((pv, cv) => pv + cv.quantity,0)
      const saleProductQuantity = SaleProducts.reduce((pv, cv) => pv + cv.quantity,0)

      const total = batchProductQuantity - misplacementProductQuantity - saleProductQuantity

      return { ...data, total }
    })

    if (request?.in_stock) {
      return productsWithTotal.filter(p => request.in_stock == 'true' ? (p.total > 0) : (p.total <= 0)) 
    }

    return productsWithTotal
  }
}

export { GetStockProductsUseCase }