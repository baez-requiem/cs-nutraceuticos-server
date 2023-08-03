import { Request, Response } from 'express'
import { CreateSaleUseCase } from './CreateSaleUseCase'
import { GetUserByRequestProvider } from '../../../../provider'
import { User } from '@prisma/client'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateSaleSchema } from './CreateSaleSchema'

class CreateSaleController extends BaseController {
  private useCase: CreateSaleUseCase

  constructor (useCase: CreateSaleUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const getUserByRequestProvider = new GetUserByRequestProvider()
    const user = await getUserByRequestProvider.execute(request, true) as User

    const dto = parseSchemaDTO(CreateSaleSchema, {
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
        ? this.created(response)
        : this.fail(response)
    } catch (error) {
      this.fail(response, error)
    }

    const data = await this.useCase.execute({
      ...request.body,
      id_user: user?.id,
      id_sales_team: user?.salesTeamId
    })

    response.json(data)
  }
}

export { CreateSaleController }