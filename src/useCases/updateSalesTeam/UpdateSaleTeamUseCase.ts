import { client } from '../../prisma/client'
import { UpdateSalesTeamSchema, UpdateSalesTeamSchemaType } from './updateSalesTeamSchema'
import { formatErrorsZod } from '../../utils/zod.utils';

interface ISalesTeamRequest extends UpdateSalesTeamSchemaType {
  id: string
}

class UpdateSaleTeamUseCase {
  
  async execute({id, ...data}: ISalesTeamRequest) {

    const validateData = UpdateSalesTeamSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const saleTeam = await client.salesTeam.update({
      where: { id },
      data: validateData
    })

    return saleTeam
  }
}

export { UpdateSaleTeamUseCase }