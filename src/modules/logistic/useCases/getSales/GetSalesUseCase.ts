import { client } from '../../../../prisma/client'

class GetSalesUseCase {
  
  async execute() {
    const sales = await client.sale.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        media: true,
        payment_type: true,
        sale_status: true,
        sales_team: true,
        user: true,
        SaleProducts: {
          include: { product: true }
        },
      }
    })

    const salesMap = sales.map(({ SaleProducts,  ...sale}) => ({
      ...sale,
      sale_products: SaleProducts
    }))

    return salesMap
  }
}

export { GetSalesUseCase }