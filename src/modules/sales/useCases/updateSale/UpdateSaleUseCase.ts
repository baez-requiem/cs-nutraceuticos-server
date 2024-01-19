import { client } from '../../../../prisma/client'
import { sortByCreatedAt } from '../../../../utils/sortUtils'
import { UpdateSaleRequestDTO } from './UpdateSaleRequestDTO'

class UpdateSaleUseCase {

  async execute({ id, products, payment_types, id_delivery_type, delivery_date, delivery_time, ...data }: UpdateSaleRequestDTO) {

    const sale = await client.sale.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      },
      include: {
        LogisticInfos: true
      }
    })

    if (products && products.length) {
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
  
      await client.saleProducts.createMany({
        data: dataSaleProducts
      })
    }
    
    if (payment_types && payment_types.length) {
      await client.salePayments.deleteMany({ where: { id_sale: id } })

      const dataPaymentTypes = payment_types.map(pt => ({
        ...pt,
        id_sale: sale.id
      }))
  
      await client.salePayments.createMany({
        data: dataPaymentTypes
      })
    }

    const logisticInfo = sortByCreatedAt(sale.LogisticInfos, 'DESC')[0]

    if (logisticInfo.id_sale_status === 'aguardando-aprovacao') {
      await client.logisticInfos.updateMany({
        where: { id_sale: sale.id, current: true },
        data: { current: false}
      })

      await client.logisticInfos.create({
        data: {
          id_user: logisticInfo.id_user,
          id_sale_status: logisticInfo.id_sale_status,
          id_delivery_type: id_delivery_type,
          delivery_value: logisticInfo.delivery_value,
          delivery_date: delivery_date,
          delivery_time: delivery_time,
          tracking_code: logisticInfo.tracking_code,
          id_motoboy: logisticInfo.id_motoboy,
          id_sale: logisticInfo.id_sale,
          notes: data.notes
        }
      })
    }

    const ok = !!sale.id

    return ok
  }
}

export { UpdateSaleUseCase }