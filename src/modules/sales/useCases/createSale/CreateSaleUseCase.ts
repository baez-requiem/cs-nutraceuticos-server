import { client } from '../../../../prisma/client'
import { CreateSaleRequestDTO } from './CreateSaleRequestDTO'

class CreateSaleUseCase {

  async execute({ products, payment_types, ...data }: CreateSaleRequestDTO) {

    const sale = await client.sale.create({
      data: data
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

    const dataPaymentTypes = payment_types.map(pt => ({
      ...pt,
      id_sale: sale.id
    }))

    const paymentTypes = await client.salePayments.createMany({
      data: dataPaymentTypes
    })
    
    const ok = !!sale.id && !!saleProducts.count && !!logisticInfos.id && !!paymentTypes.count

    return ok
  }
}

export { CreateSaleUseCase }