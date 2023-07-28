import { client } from '../../../../prisma/client'
import { DeleteSalesTeamRequestDTO } from './DeleteSalesTeamRequestDTO'

class DeleteSalesTeamUseCase {
  
  async execute({ id }: DeleteSalesTeamRequestDTO) {

    const salesTeam = await client.salesTeam.update({
      where: { id },
      data: { deleted: true }
    })

    await client.user.updateMany({
      where: { salesTeamId: id },
      data: { salesTeamId: null }
    })

    const ok = !!salesTeam.id

    return ok
  }
}

export { DeleteSalesTeamUseCase }