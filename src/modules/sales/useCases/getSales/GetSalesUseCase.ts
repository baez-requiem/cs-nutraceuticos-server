import { client } from '../../../../prisma/client'

class GetSalesUseCase {
  
  async execute() {
    const sales = await client.sale.findMany({
      orderBy: { created_at: 'desc' }
    })

    return sales
  }
}

export { GetSalesUseCase }