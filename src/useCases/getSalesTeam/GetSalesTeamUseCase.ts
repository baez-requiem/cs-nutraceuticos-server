import { client } from '../../prisma/client'

class GetSalesTeamUseCase {
  
  async execute() {
    const salesTeam = client.salesTeam.findMany({
      orderBy: { name: 'asc' }
    })

    return salesTeam
  }
}

export { GetSalesTeamUseCase }