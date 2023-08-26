import { client } from '../../../../prisma/client'
import { UpdateSaleRequestDTO } from './UpdateSaleRequestDTO'

class UpdateSaleUseCase {

  async execute({ id, products, payment_types, ...data }: UpdateSaleRequestDTO) {

    const sale = await client.sale.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
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

    const ok = !!sale.id

    return ok
  }
}

export { UpdateSaleUseCase }