import { client } from '../../../../prisma/client'
import { startDay } from "../../../../utils/dateUtils"

class GetDailySalesBySalesTeamUseCase {
  
  async execute() {
    const salesTeams = await client.salesTeam.findMany({
      select: {
        id: true,
        name: true,
        Sale: {
          select: {
            discounts: true,
            sales_quantity: true,
            SaleProducts: {
              select: {
                quantity: true,
                unit_value: true,
              }
            }
          },
          where: {
            created_at: {
              gte: startDay().toISOString()
            }
          }
        }
      }
    })

    const dailySalesBySalesTeam = salesTeams
      .filter(saleTeam => saleTeam.Sale.length)
      .map(saleTeam => {
        const resumeSale = saleTeam.Sale.map(sale => ({
          discounts: sale.discounts,
          sales_quantity: sale.sales_quantity,
          total_amount: sale.SaleProducts.reduce((pv, cv) => pv + (cv.unit_value * cv.quantity), 0),
          products: sale.SaleProducts.reduce((pv, cv) => pv + cv.quantity,0)
        })).reduce((pv, cv) => ({
          discounts: pv.discounts + cv.discounts,
          sales_quantity: pv.sales_quantity + cv.sales_quantity,
          total_amount: pv.total_amount + cv.total_amount,
          products: pv.products + cv.products,
        }), {
          discounts: 0,
          sales_quantity: 0,
          total_amount: 0,
          products: 0
        })

        return ({
          id: saleTeam.id,
          name: saleTeam.name,
          totalSales: resumeSale.sales_quantity,
          totalProducts: resumeSale.products,
          totalAmount: resumeSale.total_amount - resumeSale.discounts
        })
      })

    return dailySalesBySalesTeam
  }
}

export { GetDailySalesBySalesTeamUseCase }