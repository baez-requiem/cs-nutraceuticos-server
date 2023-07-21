import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetSalesRequestDTO } from './GetSalesRequestDTO'
import { salesWhere } from './utils'

class GetSalesUseCase {
  
  async execute(request: GetSalesRequestDTO) {

    const where = salesWhere(request)

    const sales = await client.sale.findMany({
      where,
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

    if (request.status) {
      return salesMap.filter(sale => sale.logistic_infos[0].id_sale_status === request.status)
    }

    return salesMap
  }
}

export { GetSalesUseCase }