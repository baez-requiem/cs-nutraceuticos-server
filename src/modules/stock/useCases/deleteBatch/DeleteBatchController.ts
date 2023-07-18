import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { DeleteBatchUseCase } from './DeleteBatchUseCase'
import { DeleteBatchSchema } from './DeleteBatchSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class DeleteBatchController extends BaseController{
  private useCase: DeleteBatchUseCase

  constructor (useCase: DeleteBatchUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteBatchSchema, request.body)

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

export { DeleteBatchController }