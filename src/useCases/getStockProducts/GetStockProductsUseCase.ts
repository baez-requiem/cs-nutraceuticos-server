import { client } from '../../prisma/client'

type ProductType = {
  id_product: string
  quantity: number
}

class GetStockProductsUseCase {
  
  async execute() {
    const batchesProducts = await client.batchesProducts.findMany({
      select: { id_product: true, quantity: true }
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

    const resumeProductsInStock = productsInStock.map(ps => ({
      ...ps,
      quantity: products.find(p => p.id_product === ps.id)?.quantity
    }))

    return resumeProductsInStock
  }
}

export { GetStockProductsUseCase }