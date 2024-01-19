import dayjs from 'dayjs'
import { client } from '../../../../prisma/client'
import { startMonth } from '../../../../utils/dateUtils'

class GetMonthStatisticsResumeUseCase {
  
  async execute() {

    const date = startMonth().toISOString()

    const sales = await client.sale.findMany({
      where: {
        created_at : {
          gte: date
        }
      },
      include: { SaleProducts: true }
    })

    const monthStatisticsResume: {}[] = []

    const daysInMonth = Array(dayjs().date()).fill(null).map((_, i) => i+1)

    daysInMonth.forEach(day => {

      const amount = sales
        .filter(sale => dayjs(sale.created_at).date() === day)
        .map(sale => (sale.SaleProducts.reduce((pv, cv) => pv + (cv.quantity * cv.unit_value), 0) - sale.discounts))
        .reduce((pv, cv) => pv + cv, 0) || 0

      monthStatisticsResume.push({
        day,
        amount: parseFloat(amount.toFixed(2))
      })
    })

    return monthStatisticsResume
  }
}

export { GetMonthStatisticsResumeUseCase }