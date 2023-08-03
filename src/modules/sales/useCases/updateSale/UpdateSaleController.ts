import { Request, Response } from 'express'
import { UpdateSaleUseCase } from './UpdateSaleUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { GetUserByRequestProvider } from '../../../../provider'
import { User } from '@prisma/client'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { UpdateSaleSchema } from './UpdateSaleSchema'

class UpdateSaleController extends BaseController {
  private useCase: UpdateSaleUseCase

  constructor (useCase: UpdateSaleUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const getUserByRequestProvider = new GetUserByRequestProvider()
    const user = await getUserByRequestProvider.execute(request, true) as User

    const dto = parseSchemaDTO(UpdateSaleSchema, {
      ...request.body,
      id_user: user?.id,
      id_sales_team: user?.salesTeamId
    })

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result 
        ? this.ok(response)
        : this.fail(response)
    } catch (error) {
      this.fail(response, error) 
    }
  }
}

export { UpdateSaleController }