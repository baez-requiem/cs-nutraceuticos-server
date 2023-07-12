import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateSaleRequestDTO } from './CreateSaleRequestDTO'
import { CreateSaleSchema } from './CreateSaleSchema'

class CreateSaleUseCase {

  async execute(request: CreateSaleRequestDTO) {

    const { products , ...data } = parseSchema(CreateSaleSchema, request)

    const sale = await client.sale.create({ data })

    const dataSaleProducts = products.map(sp => ({ ...sp, id_sale: sale.id }))

    const saleProducts = await client.saleProducts.createMany({
      data: dataSaleProducts
    })

    return { ...sale, products: saleProducts }
  }
}

export { CreateSaleUseCase }