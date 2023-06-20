import { Prisma } from '@prisma/client'
import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { GetStockProductsSchema, GetStockProductsSchemaType } from './getStockProductsSchema'

type ProductType = {
  id_product: string
  quantity: number
}

interface IGetStockProducts extends GetStockProductsSchemaType {}

class GetStockProductsUseCase {
  
  async execute(query: IGetStockProducts) {

    console.log(query)

    const validateQuery = GetStockProductsSchema.safeParse(query)

    if (!validateQuery.success) {
      formatErrorsZod(validateQuery.error)
      return
    }

    const validQuery = validateQuery.data

    const whereBatchesProducts: Prisma.BatchesProductsWhereInput = {}

    typeof validQuery?.active == 'boolean' && (whereBatchesProducts.product = { active: validQuery?.active })

    const batchesProducts = await client.batchesProducts.findMany({
      select: { id_product: true, quantity: true },
      where: whereBatchesProducts
    })

    const products: ProductType[] = []

    batchesProducts.forEach(bp => {
      const inProductsArr = products.find(p => p.id_product === bp.id_product)

      inProductsArr
        ? inProductsArr.quantity += bp.quantity
        : products.push(bp)
    })

    const productsInStock = await client.product.findMany({
      where: {
        id: {
          in: products.map(p => p.id_product)
        }
      }
    })

    const misplacementsProducts = await client.misplacementProducts.findMany()

    const resumeProductsInStock = productsInStock.map(ps => {
      const misplacementsQuantity = misplacementsProducts
        .filter(mp => mp.id_product == ps.id)
        .map(mp => mp.quantity)
        .reduce((pv, cv) => pv + cv, 0) || 0

      const quantity = products.find(p => p.id_product === ps.id)?.quantity || 0

      return ({
        ...ps,
        quantity: quantity - misplacementsQuantity
      })
    })

    return resumeProductsInStock
  }
}

export { GetStockProductsUseCase }