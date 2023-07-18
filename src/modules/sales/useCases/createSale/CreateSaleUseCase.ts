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

    const logisticInfos = await client.logisticInfos.create({
      data: {
        id_sale: sale.id,
        id_user: data.id_user,
        id_sale_status: 'aguardando-aprovacao'
      }
    })

    return { ...sale, products: saleProducts, logistic_infos: logisticInfos }
  }
}

export { CreateSaleUseCase }