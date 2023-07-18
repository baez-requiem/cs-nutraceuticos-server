import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { UpdateBatchUseCase } from './UpdateBatchUseCase'
import { UpdateBatchSchema } from './UpdateBatchSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class UpdateBatchController extends BaseController{
  private useCase: UpdateBatchUseCase

  constructor (useCase: UpdateBatchUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateBatchSchema, request.body)

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

export { UpdateBatchController }