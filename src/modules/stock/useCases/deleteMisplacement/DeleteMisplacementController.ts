import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { DeleteMisplacementUseCase } from './DeleteMisplacementUseCase'
import { DeleteMisplacementSchema } from './DeleteMisplacementSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class DeleteMisplacementController extends BaseController{
  private useCase: DeleteMisplacementUseCase

  constructor (useCase: DeleteMisplacementUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteMisplacementSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.ok(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { DeleteMisplacementController }