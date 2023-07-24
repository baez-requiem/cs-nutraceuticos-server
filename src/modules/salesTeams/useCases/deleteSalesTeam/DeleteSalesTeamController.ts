import { Request, Response } from 'express'
import { DeleteSalesTeamUseCase } from './DeleteSalesTeamUseCase'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { BaseController } from '../../../../shared/core/BaseController'
import { DeleteSalesTeamSchema } from './DeleteSalesTeamSchema'

class DeleteSalesTeamController extends BaseController {
  private useCase: DeleteSalesTeamUseCase

  constructor (useCase: DeleteSalesTeamUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteSalesTeamSchema, request.body)

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

export { DeleteSalesTeamController }