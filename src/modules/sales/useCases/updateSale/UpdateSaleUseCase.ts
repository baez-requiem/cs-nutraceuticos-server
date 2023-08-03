import { client } from '../../../../prisma/client'
import { UpdateSaleRequestDTO } from './UpdateSaleRequestDTO'

class UpdateSaleUseCase {

  async execute({ id, products, ...data }: UpdateSaleRequestDTO) {

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

    const ok = !!sale.id && !!saleProducts.count

    return ok
  }
}

export { UpdateSaleUseCase }