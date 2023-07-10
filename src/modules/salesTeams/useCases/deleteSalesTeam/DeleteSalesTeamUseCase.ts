import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { DeleteSalesTeamRequestDTO } from './DeleteSalesTeamRequestDTO'
import { DeleteSalesTeamSchema } from './DeleteSalesTeamSchema'

class DeleteSalesTeamUseCase {
  
  async execute(request: DeleteSalesTeamRequestDTO) {
   const { id } = parseSchema(DeleteSalesTeamSchema, request)

    await client.salesTeam.delete({
      where: { id }
    })

    await client.user.updateMany({
      where: { salesTeamId: id },
      data: { salesTeamId: null }
    })

    return { status: true }
  }
}

export { DeleteSalesTeamUseCase }