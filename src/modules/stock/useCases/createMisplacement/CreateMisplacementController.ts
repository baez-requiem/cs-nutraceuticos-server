import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { CreateMisplacementUseCase } from './CreateMisplacementUseCase'
import { CreateMisplacementSchema } from './CreateMisplacementSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class CreateMisplacementController extends BaseController{
  private useCase: CreateMisplacementUseCase

  constructor (useCase: CreateMisplacementUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateMisplacementSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.created(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { CreateMisplacementController }