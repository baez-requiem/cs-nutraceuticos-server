import { client } from '../../../../prisma/client'

class GetSalesUseCase {
  
  async execute() {
    const sales = await client.sale.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        media: true,
        payment_type: true,
        LogisticInfos: { 
          include: {
            sale_status: true,
            motoboy: true,
            delivery_type: true,
            user: true
          },
          orderBy: { created_at: 'desc' }
        },
        sales_team: true,
        user: true,
        SaleProducts: {
          include: { product: true, }
        },
      }
    })

    const salesMap = sales.map(({ SaleProducts, LogisticInfos, ...sale}) => ({
      ...sale,
      sale_products: SaleProducts,
      logistic_infos: LogisticInfos
    }))

    return salesMap
  }
}

export { GetSalesUseCase }