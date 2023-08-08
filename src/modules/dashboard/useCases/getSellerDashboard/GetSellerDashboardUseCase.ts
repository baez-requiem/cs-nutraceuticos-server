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
      }
    })
    
    const salesWeek = await client.sale.findMany({
      where: {
        id_user,
        created_at: {
          gte: startWeek.toISOString(),
          lte: endWeek.toISOString()
        }
      }
    })
    
    const salesDay = await client.sale.findMany({
      where: {
        id_user,
        created_at: {
          gte: startDay.toISOString(),
          lte: endDay.toISOString()
        }
      }
    })

    const totalSalesPerDay = []

    for (let i = 0; i < 7; i++) {
      const d = startWeek.add(i, 'day')
      const day = d.date()
      const label = d.format('DD/MM')
     
      const sales = salesWeek.filter(s => dayjs(s.created_at).date() === day)

      const value = sales.reduce((pv, cv) => pv + cv.sales_quantity, 0)

      totalSalesPerDay.push({ label, value })
    }

    const resume = {
      totalSalesMonth: salesMonth.reduce((pv, cv) => pv + cv.sales_quantity, 0),
      totalSalesWeek: salesWeek.reduce((pv, cv) => pv + cv.sales_quantity, 0),
      totalSalesDay: salesDay.reduce((pv, cv) => pv + cv.sales_quantity, 0),
      totalSalesPerDay
    }

    return resume
  }
}

export { GetSellerDashboardUseCase }