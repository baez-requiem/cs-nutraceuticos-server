import { client } from '../../../../prisma/client'
import { UpdateSalesTeamRequestDTO } from './UpdateSalesTeamRequestDTO'

class UpdateSalesTeamUseCase {
  
  async execute({ id, ...data }: UpdateSalesTeamRequestDTO) {

    const salesTeam = await client.salesTeam.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    const ok = !!salesTeam.id

    return ok
  }
}

export { UpdateSalesTeamUseCase }