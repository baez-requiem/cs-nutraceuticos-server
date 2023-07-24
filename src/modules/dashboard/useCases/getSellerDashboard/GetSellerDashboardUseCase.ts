import { client } from '../../../../prisma/client'
import { GetSellerDashboardRequestDTO } from './GetSellerDashboardRequestDTO'
import { startAndEndOfDay, startAndEndOfMonth, startAndEndOfWeek } from '../../../../utils/dateUtils'
import dayjs from 'dayjs'

class GetSellerDashboardUseCase {
  async execute({ id_user }: GetSellerDashboardRequestDTO) {

    const [startMonth, endMonth] = startAndEndOfMonth()
    const [startWeek, endWeek] = startAndEndOfWeek()
    const [startDay, endDay] = startAndEndOfDay()

    const salesMonth = await client.sale.findMany({
      where: {
        id_user,
        created_at: {
          gte: startMonth.toISOString(),
          lte: endMonth.toISOString()
        }
      },
      select: { SaleProducts: { select: { sales_quantity: true } } }
    })
    
    const salesWeek = await client.sale.findMany({
      where: {
        id_user,
        created_at: {
          gte: startWeek.toISOString(),
          lte: endWeek.toISOString()
        }
      },
      select: {
        SaleProducts: { select: { sales_quantity: true } },
        created_at: true
      }
    })
    
    const salesDay = await client.sale.findMany({
      where: {
        id_user,
        created_at: {
          gte: startDay.toISOString(),
          lte: endDay.toISOString()
        }
      },
      select: { SaleProducts: { select: { sales_quantity: true } } }
    })

    const totalSalesPerDay = []

    for (let i = 0; i < 7; i++) {
      const d = startWeek.add(i, 'day')
      const day = d.date()
      const label = d.format('DD/MM')
     
      const sale = salesWeek.find(s => dayjs(s.created_at).date() === day)

      const value = sale?.SaleProducts.reduce((pv, cv) => pv + cv.sales_quantity, 0) || 0

      totalSalesPerDay.push({ label, value })
    }

    const resume = {
      totalSalesMonth: salesMonth.reduce((pv, cv) => pv + cv.SaleProducts.reduce((pv2, cv2) => pv2 + cv2.sales_quantity, 0), 0),
      totalSalesWeek: salesWeek.reduce((pv, cv) => pv + cv.SaleProducts.reduce((pv2, cv2) => pv2 + cv2.sales_quantity, 0), 0),
      totalSalesDay: salesDay.reduce((pv, cv) => pv + cv.SaleProducts.reduce((pv2, cv2) => pv2 + cv2.sales_quantity, 0), 0),
      totalSalesPerDay
    }

    return resume
  }
}

export { GetSellerDashboardUseCase }