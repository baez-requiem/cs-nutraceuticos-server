import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { UpdateSaleRequestDTO } from './UpdateSaleRequestDTO'
import { UpdateSaleSchema } from './UpdateSaleSchema'

class UpdateSaleUseCase {

  async execute(request: UpdateSaleRequestDTO) {

    const { id, products, ...data } = parseSchema(UpdateSaleSchema, request)

    const sale = await client.sale.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    await client.saleProducts.deleteMany({ where: { id_sale: id } })

    const dbProducts = await client.product.findMany({
      where: {
        id: { in: products.map(p => p.id_product) }
      }
    })

    const dataSaleProducts = products.map(sp => {
      const unit_value = dbProducts.find(dbp => dbp.id === sp.id_product)?.amount!
      
      return { ...sp, id_sale: sale.id, unit_value }
    })

    const saleProducts = await client.saleProducts.createMany({
      data: dataSaleProducts
    })

    return { ...sale, products: saleProducts }
  }
}

export { UpdateSaleUseCase }