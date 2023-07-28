import { client } from '../../../../prisma/client'
import { startMonth } from '../../../../utils/dateUtils'

class GetMonthStatisticsUseCase {
  
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

    const monthStatistics = sales.map(sale => {
      const totalSales = sale.SaleProducts.reduce((pv, cv) => pv + cv.sales_quantity, 0)
      const totalAmount = sale.SaleProducts.reduce((pv, cv) => pv + (cv.unit_value * cv.quantity), 0) - sale.discounts
      const totalProducts = sale.SaleProducts.reduce((pv, cv) => pv + cv.quantity, 0)

      return {
        totalSales,
        totalProducts,
        totalAmount
      }
    }).reduce((pv, cv) => ({
      totalSales: pv.totalSales + cv.totalSales,
      totalProducts: pv.totalProducts + cv.totalProducts,
      totalAmount: pv.totalAmount + cv.totalAmount,
    }), {
      totalSales: 0,
      totalProducts: 0,
      totalAmount: 0,
    })

    return { ...monthStatistics, totalAmount: parseFloat(monthStatistics.totalAmount.toFixed(2))}
  }
}

export { GetMonthStatisticsUseCase }