import { client } from '../../../../prisma/client'

class GetLastSalesUseCase {
  public async execute () {
    const sales = await client.sale.findMany({
      orderBy: { created_at: 'desc' },
      take: 5,
      select: {
        id: true,
        discounts: true,
        created_at: true,
        user: { 
          select: { name: true }
        },
        SaleProducts: {
          select: {
            quantity: true,
            unit_value: true,
            product: {
              select: { name: true }
            }
          }
        }
      }
    })

    const lastSales = sales.map(sale => {

      const products = sale.SaleProducts.map(sp => ({ 
        quantity: sp.quantity,
        name: sp.product.name,
        amount: sp.unit_value,
      }))

      const total = products.reduce((pv, cv) => pv + (cv.amount * cv.quantity),0)

      return {
        id: sale.id,
        discounts: sale.discounts,
        created_at: sale.created_at,
        seller: sale.user,
        products,
        total
      }
    })

    return lastSales
  }
}

export { GetLastSalesUseCase }