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