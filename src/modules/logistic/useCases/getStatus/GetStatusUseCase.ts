import { client } from '../../../../prisma/client'

class GetStatusUseCase {
  
  async execute() {
    const status = await client.saleStatus.findMany({
      orderBy: { status: 'asc' },
    })

    return status
  }
}

export { GetStatusUseCase }