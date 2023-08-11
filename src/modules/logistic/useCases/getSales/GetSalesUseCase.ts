import { client } from '../../../../prisma/client'
import { GetSalesRequestDTO } from './GetSalesRequestDTO'
import { GetSalesResponseDTO } from './GetSalesResponseDTO'
import { salesWhere } from './utils'

class GetSalesUseCase {
  
  async execute(request: GetSalesRequestDTO): Promise<GetSalesResponseDTO> {

    const where = salesWhere(request)

    const sales = await client.sale.findMany({
      where,
      orderBy: { created_at: 'desc' },
      include: {
        media: true,
        SalePayments: {
          include: { payment_type: true }
        },
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

    let salesMap = sales.map(({ SaleProducts, LogisticInfos, SalePayments, ...sale }) => ({
      ...sale,
      sale_payments: SalePayments,
      sale_products: SaleProducts,
      logistic_infos: LogisticInfos
    })) as GetSalesResponseDTO

    if (!request.number) {
      if (request.status) {
        salesMap = salesMap.filter(sale => sale.logistic_infos[0].id_sale_status === request.status)
      }
  
      if (request.delivery_type) {
        salesMap = salesMap.filter(sale => sale.logistic_infos[0].id_delivery_type === request.delivery_type)
      }
      if (request.motoboy) {
        salesMap = salesMap.filter(sale => sale.logistic_infos[0].id_motoboy === request.motoboy)
      }
    }

    return salesMap
  }
}

export { GetSalesUseCase }