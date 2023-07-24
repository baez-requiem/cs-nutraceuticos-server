import { client } from '../../../../prisma/client'
import { CreateSalesTeamRequestDTO } from './CreateSalesTeamRequestDTO'

class CreateSalesTeamUseCase {
  
  async execute(request: CreateSalesTeamRequestDTO) {

    const salesTeam = await client.salesTeam.create({
      data: request
    })

    const ok = !!salesTeam.id

    return ok
  }
}

export { CreateSalesTeamUseCase }