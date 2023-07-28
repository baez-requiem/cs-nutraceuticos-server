import { client } from '../../../../prisma/client'

class GetSalesTeamUseCase {
  
  async execute() {
    const salesTeam = await client.salesTeam.findMany({
      orderBy: { name: 'asc' },
      where: { deleted: false }
    })

    return salesTeam
  }
}

export { GetSalesTeamUseCase }