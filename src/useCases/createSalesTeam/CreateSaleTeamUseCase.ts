import { client } from '../../prisma/client'
import { CreateSalesTeamSchema, CreateSalesTeamSchemaType } from './createSalesTeamSchema'
import { formatErrorsZod } from '../../utils/zod.utils';

interface ISalesTeamRequest extends CreateSalesTeamSchemaType {}

class CreateSaleTeamUseCase {
  
  async execute(data: ISalesTeamRequest) {

    const validateData = CreateSalesTeamSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const saleTeam = await client.salesTeam.create({
      data: validateData.data
    })

    return saleTeam
  }
}

export { CreateSaleTeamUseCase }