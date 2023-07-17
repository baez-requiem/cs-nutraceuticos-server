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

    const dataSaleProducts = products.map(sp => ({ ...sp, id_sale: sale.id }))

    const saleProducts = await client.saleProducts.createMany({
      data: dataSaleProducts
    })

    return { ...sale, products: saleProducts }
  }
}

export { UpdateSaleUseCase }