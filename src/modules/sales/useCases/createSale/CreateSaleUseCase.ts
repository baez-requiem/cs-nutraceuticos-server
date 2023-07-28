import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateSaleRequestDTO } from './CreateSaleRequestDTO'
import { CreateSaleSchema } from './CreateSaleSchema'

class CreateSaleUseCase {

  async execute(request: CreateSaleRequestDTO) {

    const { products, card_installments, ...data } = parseSchema(CreateSaleSchema, request)

    const sale = await client.sale.create({
      data: {
        ...data,
        card_installments: (data.payment_type_id === 'credit_card' ? card_installments : null)
      }
    })

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