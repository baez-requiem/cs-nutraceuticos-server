import { Request, Response } from 'express'
import { UpdateSalesTeamUseCase } from './UpdateSalesTeamUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { UpdateSalesTeamSchema } from './UpdateSalesTeamSchema'

class UpdateSalesTeamController extends BaseController {
  private useCase: UpdateSalesTeamUseCase

  constructor (useCase: UpdateSalesTeamUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateSalesTeamSchema, request.body)

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

export { UpdateSalesTeamController }