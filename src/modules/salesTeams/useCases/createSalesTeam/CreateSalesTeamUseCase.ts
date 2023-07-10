import { client } from '../../../../prisma/client'
import { CreateSalesTeamSchema } from './CreateSalesTeamSchema'
import { CreateSalesTeamRequestDTO } from './CreateSalesTeamRequestDTO'
import { parseSchema } from '../../../../utils/zod.utils'

class CreateSalesTeamUseCase {
  
  async execute(request: CreateSalesTeamRequestDTO) {

    const data = parseSchema(CreateSalesTeamSchema, request)

    const saleTeam = await client.salesTeam.create({ data })

    return saleTeam
  }
}

export { CreateSalesTeamUseCase }