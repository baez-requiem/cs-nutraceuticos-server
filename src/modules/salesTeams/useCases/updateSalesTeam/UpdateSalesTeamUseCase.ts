import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { UpdateSalesTeamRequestDTO } from './UpdateSalesTeamRequestDTO'
import { UpdateSalesTeamSchema } from './UpdateSalesTeamSchema'

class UpdateSalesTeamUseCase {
  
  async execute(request: UpdateSalesTeamRequestDTO) {

    const { id, ...data } = parseSchema(UpdateSalesTeamSchema, request)

    const salesTeam = await client.salesTeam.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    return salesTeam
  }
}

export { UpdateSalesTeamUseCase }