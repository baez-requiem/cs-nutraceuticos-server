import { Prisma } from '@prisma/client'
import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { GetStockProductsSchema, GetStockProductsSchemaType } from './getStockProductsSchema'

interface IGetStockProducts extends GetStockProductsSchemaType {}

class GetStockProductsUseCase {
  
  async execute(query: IGetStockProducts) {
    const validateQuery = GetStockProductsSchema.safeParse(query)

    if (!validateQuery.success) {
      formatErrorsZod(validateQuery.error)
      return
    }

    const validQuery = validateQuery.data

    const whereProducts: Prisma.ProductWhereInput = {}

    typeof validQuery?.active == 'boolean' && (whereProducts.active = !!validQuery.active)

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

    if (typeof validQuery.in_stock == 'boolean') {
      return productsWithTotal.filter(p => validQuery.in_stock ? (p.total > 0) : (p.total <= 0)) 
    }

    return productsWithTotal
  }
}

export { GetStockProductsUseCase }