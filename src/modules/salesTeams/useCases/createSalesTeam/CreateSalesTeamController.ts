import { Request, Response } from 'express'
import { CreateSalesTeamUseCase } from './CreateSalesTeamUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateSalesTeamSchema } from './CreateSalesTeamSchema'

class CreateSalesTeamController extends BaseController {
  private useCase: CreateSalesTeamUseCase

  constructor (useCase: CreateSalesTeamUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateSalesTeamSchema, request.body)

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
  }
}

export { CreateSalesTeamController }