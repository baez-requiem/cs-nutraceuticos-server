import { client } from '../../../../prisma/client'
import { startMonth } from "../../../../utils/dateUtils"

class GetMonthSalesBySellerUseCase {

  async execute() {
    const sellers = await client.user.findMany({
      where: {
        active: true,
        roleId: 'seller'
      },
      select: {
        id: true,
        name: true,
        Sale: {
          select: {
            discounts: true,
            SaleProducts: {
              select: {
                quantity: true,
                sales_quantity: true,
                product: {
                  select: {
                    amount: true,
                  }
                }
              }
            }
          },
          where: {
            created_at: {
              gte: startMonth().toISOString()
            }
          }
        }
      }
    })

    const dailySalesBySeller = sellers
      .filter(seller => seller.Sale.length)
      .map(seller => {
        const resumeSale = seller.Sale.map(sale => ({
          discounts: sale.discounts,
          sales_quantity: sale.SaleProducts.reduce((pv, cv) => pv + cv.sales_quantity, 0),
          total_amount: sale.SaleProducts.reduce((pv, cv) => pv + (cv.product.amount * cv.quantity), 0),
          products: sale.SaleProducts.reduce((pv, cv) => pv + cv.quantity, 0)
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
          id: seller.id,
          name: seller.name,
          totalSales: resumeSale.sales_quantity,
          totalProducts: resumeSale.products,
          totalAmount: resumeSale.total_amount - resumeSale.discounts
        })
      })

    return dailySalesBySeller
  }
}

export { GetMonthSalesBySellerUseCase }